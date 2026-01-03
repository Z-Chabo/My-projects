import type { User } from "@supabase/supabase-js";
import { useState } from "react";
import { supabase } from "../supabase-client";
import { AuthContext } from "./AuthContextContxt";
import { useEffect } from "react";

// creates a context that can be of type AuthContext or undefined and has an initial value undefined

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  //gets data from supbase auth and then takes out session
  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
    });
    // supabase onAuthStateChange returns a data object that has subscription attribute in it we rename the data object to authListener
    // the "_" is equal to "event" hence it takes an event parameter
    const { data: authListener } = supabase.auth.onAuthStateChange(
      (_, session) => {
        setUser(session?.user ?? null);
      }
    );
    // unsubscribes the authlistener when we unmount which happens when we change pages, when we change pages like going from home to about among other cases
    return () => {
      authListener?.subscription.unsubscribe();
    };
  }, []);

  const signInWithGithub = () => {
    supabase.auth.signInWithOAuth({ provider: "github" });
  };
  const signOut = () => {
    supabase.auth.signOut();
  };

  return (
    <AuthContext.Provider value={{ user, signInWithGithub, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};
