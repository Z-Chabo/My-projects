import { useQuery } from "@tanstack/react-query";
import { supabase } from "../supabase-client";
import { PostItem } from "./PostItem";

export interface Post {
  id: number;
  title: string;
  content: string;
  created_at: string;
  image_url: string;
  avatar_url?: string;
  like_count?: number;
  comment_count?: number;
}
async function fetchPosts(): Promise<Post[]> {
  const { data, error } = await supabase.rpc("get_posts_with_counts");
  if (error) {
    throw new Error(error.message);
  }
  return data as Post[];
}
export function PostList() {
  // useQuery eitheir returns Post or returns Error
  const { data, error, isLoading } = useQuery<Post[], Error>({
    queryKey: ["posts"],
    queryFn: () => fetchPosts(),
  });
  console.log(data);
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  if (data != undefined)
    return (
      <div className="flex flex-wrap gap-6 justify-center">
        {data?.map((post, key) => (
          <PostItem post={post} key={key} />
        ))}
      </div>
    );
}
