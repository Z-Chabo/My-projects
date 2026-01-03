import { useState } from "react";
// it is what we use to add, insert , delete or update data in our service
import { useMutation } from "@tanstack/react-query";
import { supabase } from "../supabase-client";
import { useAuth } from "../utils/UseAuth";
import { useQuery } from "@tanstack/react-query";
import type { Community } from "./CommunityList";
import { fetchCommunities } from "../utils/fetchCommunities";



interface PostInput {
  title: string;
  content: string;
  avatar_url?: string;
  community_id?: number|null;
}
const createPost = async (post: PostInput, imageFile: File) => {
  const filePath = `${post.title}-${Date.now()}-${imageFile.name}`;
  // first we upload picture and it's filepathin bucket storage called post-images in supabase
  const { error: uploadError } = await supabase.storage
    .from("post-images")
    .upload(filePath, imageFile);
  // we then use supabase to get the url of the image that we uploaded so that we can display it in frontend
  const { data: publicURLData } = supabase.storage
    .from("post-images")
    .getPublicUrl(filePath);
  //
  const { data, error } = await supabase
    .from("posts")
    .insert({ ...post, image_url: publicURLData.publicUrl });
  if (uploadError) throw new Error(uploadError.message);
  if (error) throw new Error(error.message);
  return data;
};

export function CreatePost() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const [selectedCommunityId, setSelectedCommunityId] = useState<number | null>(
    null
  );

  // we use UseMutation to get loading, error and data state which means that reactQuery now manages our api calls
  // so basically it takes our createPost funtion and gives it more tools that it can use
  // mutationFn takes in one parameter object with two attributes that is then given to createPost function by using anonymous function mutation. we do this because mutationFn takes in one parameter but we
  // want to give it a post and an imageFile
  const { data:communities } = useQuery<Community[], Error>({
    queryKey: ["communities"],
    queryFn: fetchCommunities,
  });
  const { mutate, isPending, isError } = useMutation({
    mutationFn: (data: { post: PostInput; imageFile: File }) => {
      return createPost(data.post, data.imageFile);
    },
  });
  //gives us back current the current user that is signed in
  const { user } = useAuth();
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files || e.target.files.length === 0)
      return "No images selected";
    else setSelectedFile(e.target.files[0]);
  };

  const handlCommunityChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value=e.target.value
    setSelectedCommunityId(value?Number(value):null)
  };

  const handleSubmit = (event: React.FormEvent) => {
    event?.preventDefault();
    // the {post:{title,content},imageFile:selectedFile} are the object data that has two parameters inside of it that are themselves objects
    if (selectedFile === null) {
      throw new Error("No image selected");
    }
    // here to pass the avatar we use the user that the useAuth function returned
    mutate({
      post: {
        title,
        content,
        avatar_url: user?.user_metadata.avatar_url || null,
        community_id: selectedCommunityId,
      },
      imageFile: selectedFile,
    });
  };
  return (
    <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-4">
      <div>
        <label htmlFor="title" className="block mb-2 font-medium">
          Title
        </label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full border border-white/10 bg-transparent p-2 rounded"
          required
        />
      </div>
      <div>
        <label htmlFor="content" className="block mb-2 font-medium">
          Content
        </label>
        <textarea
          id="content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="w-full border border-white/10 bg-transparent p-2 rounded"
          rows={5}
          required
        />
      </div>
      <div>
        <label>
          Select a Community:
        </label>
        <select id="community" onChange={handlCommunityChange}>
          <option value="">-- Select a community --</option>
          {communities?.map((community) => (
          <option key={community.id} value={community.id}>
            {community.name}
          </option>
        ))}</select>
      </div>

      <div>
        <label htmlFor="image" className="block mb-2 font-medium">
          Upload Image
        </label>
        <input
          type="file"
          id="image"
          accept="image/*"
          onChange={handleFileChange}
          className="w-full text-gray-200"
        />
      </div>
      <button
        type="submit"
        className="bg-purple-500 text-white px-4 py-2 rounded cursor-pointer"
      >
        {isPending ? "Creating..." : "Create Post"}
      </button>

      {isError && <p className="text-red-500"> Error creating post.</p>}
    </form>
  );
}
