"use client";

import { Button } from "@/components/ui/button";
import GeneratedPost from "@/components/GeneratedPost";
import { createClient } from "@/lib/supabase/client";
import { redirect, useRouter } from "next/navigation";
import { logout } from "@/app/logout/actions";
import { useEffect, useState } from "react";

type GeneratedPost = {
  post_title: string;
  post_content: string;
  post_tags: string;
};

export default function YTVideoToLinkedInPostPage() {
  const [userId, setUserId] = useState<string>("");
  const [generatedPosts, setGeneratedPosts] = useState<GeneratedPost[]>([]);
  const router = useRouter();
  const supabase = createClient();
  // call the getLinkedInPosts here
  async function getLinkedInPosts(user_id: string) {
    // do a fetch here
    
    console.log("User id: ", user_id);

    if (user_id === "") {
      router.push("/error");
    }

    const supabase = createClient();
    const { data, error } = await supabase
      .from("linkedin_post_gen")
      .select(`post_title, post_content, post_tags`)
      .eq("user_id", user_id);

    console.log(data);
    if (error) {
      router.push("/error");
    }
    return data as GeneratedPost[];
  }

  function handleLogoutClick() {
    logout();
  }

  useEffect(() => {
    async function checkUserAuthenticated() {
      const { data, error } = await supabase.auth.getUser();
      if (error || !data?.user) {
        console.error(error);
        router.push("/login");
      } else {
        setUserId(data.user.id);
        const posts = await getLinkedInPosts(data.user.id);
        setGeneratedPosts(posts);
      }
    }
    checkUserAuthenticated();
  }, []);
  return (
    <main className="w-3/4 h-screen">
      <div className="flex items-center justify-end p-6">
        <Button
          variant="outline"
          className="text-lg font-bold text-[#D80000]"
          onClick={() => handleLogoutClick()}
        >
          Log out
        </Button>
      </div>
      <div className="p-6 ml-10 flex flex-col items-start justify-center gap-8">
        <p className="text-[#363430] text-xl font-medium">Results</p>
        <div className="md:grid md:grid-cols-2 sm:flex sm:flex-col gap-6">
          {generatedPosts ? (
            generatedPosts.map((post, idx) => (
              <GeneratedPost
                key={idx}
                icon="/postIcon1.svg"
                title={post.post_title}
                content={post.post_content}
                tags={post.post_tags.split("#").slice(1)}
              />
            ))
          ) : (
            <p>No posts yet</p>
          )}{" "}
        </div>
      </div>
    </main>
  );
}
