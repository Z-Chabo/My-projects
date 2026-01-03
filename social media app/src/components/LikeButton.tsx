import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { supabase } from "../supabase-client";
import { useAuth } from "../utils/UseAuth";

interface Props {
  postId: number;
}

interface Vote {
  id: number;
  post_id: number;
  user_id: string;
  vote_for_user_id: number;
}

const vote = async (voteValue: number, postId: number, userId: string) => {
  const { data: existingVote } = await supabase
    .from("interactions")
    .select("*")
    .eq("post_id", postId)
    .eq("user_id", userId)
    .maybeSingle();

  if (existingVote) {
    // Liked -> 0, Like -> -1
    if (existingVote.vote_for_user_id === voteValue) {
      const { error } = await supabase
        .from("interactions")
        .delete()
        .eq("id", existingVote.id);

      if (error) throw new Error(error.message);
    } else {
      const { error } = await supabase
        .from("interactions")
        .update({ vote_for_user_id: voteValue })
        .eq("id", existingVote.id);

      if (error) throw new Error(error.message);
    }
  } else {
    const { error } = await supabase.from("interactions").insert({
      post_id: postId,
      user_id: userId,
      vote_for_user_id: voteValue,
    });
    if (error) throw new Error(error.message);
  }
};

const fetchinteractions = async (postId: number): Promise<Vote[]> => {
  const { data, error } = await supabase
    .from("interactions")
    .select("*")
    .eq("post_id", postId);

  if (error) throw new Error(error.message);
  return data as Vote[];
};

export const LikeButton = ({ postId }: Props) => {
  const { user } = useAuth();

  const queryClient = useQueryClient();

  const {
    data: interactions,
    isLoading,
    error,
  } = useQuery<Vote[], Error>({
    queryKey: ["interactions", postId],
    queryFn: () => fetchinteractions(postId),
    refetchInterval: 5000,
  });

  const { mutate } = useMutation({
    mutationFn: (voteValue: number) => {
      if (!user) throw new Error("You must be logged in to Vote!");
      return vote(voteValue, postId, user.id);
    },

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["interactions", postId] });
    },
  });

  if (isLoading) {
    return <div> Loading interactions...</div>;
  }

  if (error) {
    return <div> Error: {error.message}</div>;
  }

  const likes =
    interactions?.filter((v) => v.vote_for_user_id === 1).length || 0;
  const dislikes =
    interactions?.filter((v) => v.vote_for_user_id === -1).length || 0;
  const userVote = interactions?.find(
    (v) => v.user_id === user?.id
  )?.vote_for_user_id;

  return (
    <div className="flex items-center space-x-4 my-4">
      <button
        onClick={() => mutate(1)}
        className={`px-3 py-1 cursor-pointer rounded transition-colors duration-150 ${
          userVote === 1 ? "bg-green-500 text-white" : "bg-gray-200 text-black"
        }`}
      >
        👍 {likes}
      </button>
      <button
        onClick={() => mutate(-1)}
        className={`px-3 py-1 cursor-pointer rounded transition-colors duration-150 ${
          userVote === -1 ? "bg-red-500 text-white" : "bg-gray-200 text-black"
        }`}
      >
        👎 {dislikes}
      </button>
    </div>
  );
};
