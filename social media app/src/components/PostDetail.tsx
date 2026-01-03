import { useQuery } from "@tanstack/react-query";
import type { Post } from "./PostList";
import { supabase } from "../supabase-client";
import { LikeButton } from "./LikeButton";
import { CommentSection } from "./CommentSection";
interface Props {
  postId: number;
}
export function PostDetail({ postId }: Props) {
  async function fetchPostById(id: number): Promise<Post> {
    const { data, error } = await supabase
      .from("posts")
      .select()
      .eq("id", id)
      .single();
    if (error) {
      throw new Error(error.message);
    }
    return data;
  }
  const { data, error, isLoading } = useQuery<Post, Error>({
    // we put postID in query key so that if we want to modify a specific post with we can use its id given as a key
    queryKey: ["post", postId],
    queryFn: () => fetchPostById(postId),
  });
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  return (
    <div className="pt-10">
      <h2>{data?.title}</h2>
      <img src={data?.image_url} alt={data?.title} />
      <p>{data?.content}</p>
      <p>Posted on: {new Date(data!.created_at).toLocaleDateString()}</p>
      <LikeButton postId={postId} />
      <CommentSection postId={postId} />
    </div>
  );
}
