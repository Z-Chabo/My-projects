import {supabase} from "../supabase-client";
import type { Community } from "../components/CommunityList"
export async function fetchCommunities(): Promise<Community[]> {
  const { data, error } = await supabase
    .from("communities")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) throw new Error(error.message);
  return data as Community[];
};