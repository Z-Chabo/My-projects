import {supabase} from "../supabase-client";
import type { PostWithCommunity } from "../types/PostWithCommunity";
export async function fetchCommunityPosts(communityId:number): Promise<PostWithCommunity[]> {
    //gets also the name of the community from the communities table
  const { data, error } = await supabase
    .from("posts")
    .select("*, communities(name)")
    .eq("community_id", communityId)
    .order("created_at", { ascending: false });

  if (error) throw new Error(error.message);
  return data as PostWithCommunity[];
};