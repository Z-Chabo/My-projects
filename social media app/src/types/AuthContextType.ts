import type { User } from "@supabase/supabase-js";

export interface AuthContextType {
  // the User from supabase allow us to get the user information (in github for example) when he logs in
  user: User | null;
  signInWithGithub: () => void;
  signOut: () => void;
  
}