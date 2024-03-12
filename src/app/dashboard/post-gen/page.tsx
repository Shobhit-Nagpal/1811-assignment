import { Button } from "@/components/ui/button";
import GeneratedPost from "@/components/GeneratedPost";
import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";

async function getLinkedInPosts() {
  //do a fetch here
}

export default async function YTVideoToLinkedInPostPage() {
  // call the getLinkedInPosts here
  const supabase = createClient();
  const { data, error } = await supabase.auth.getUser();
  if (error || !data?.user) {
    redirect("/login");
  }

  const generatedPosts = [
    {
      icon: "/postIcon1.svg",
      title: "UX review presentations",
      content: `How do you create compelling presentations that wow your colleagues and impress your managers? Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ullamcorper mattis lorem non. Ultrices praesent amet ipsum justo massa. Eu dolor aliquet risus gravida nunc at feugiat consequat purus. Non massa enim vitae duis mattis. Vel in ultricies vel fringilla.`,
      tags: ["Design", "Research", "Nocode"],
    },
    {
      icon: "/postIcon1.svg",
      title: "UX review presentations",
      content: `How do you create compelling presentations that wow your colleagues and impress your managers? Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ullamcorper mattis lorem non. Ultrices praesent amet ipsum justo massa. Eu dolor aliquet risus gravida nunc at feugiat consequat purus. Non massa enim vitae duis mattis. Vel in ultricies vel fringilla.`,
      tags: ["Design", "Research", "Nocode"],
    },
    {
      icon: "/postIcon1.svg",
      title: "UX review presentations",
      content: `How do you create compelling presentations that wow your colleagues and impress your managers? Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ullamcorper mattis lorem non. Ultrices praesent amet ipsum justo massa. Eu dolor aliquet risus gravida nunc at feugiat consequat purus. Non massa enim vitae duis mattis. Vel in ultricies vel fringilla.`,
      tags: ["Design", "Research", "Nocode"],
    },
    {
      icon: "/postIcon1.svg",
      title: "UX review presentations",
      content: `How do you create compelling presentations that wow your colleagues and impress your managers? Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ullamcorper mattis lorem non. Ultrices praesent amet ipsum justo massa. Eu dolor aliquet risus gravida nunc at feugiat consequat purus. Non massa enim vitae duis mattis. Vel in ultricies vel fringilla.`,
      tags: ["Design", "Research", "Nocode"],
    },
    {
      icon: "/postIcon1.svg",
      title: "UX review presentations",
      content: `How do you create compelling presentations that wow your colleagues and impress your managers? Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ullamcorper mattis lorem non. Ultrices praesent amet ipsum justo massa. Eu dolor aliquet risus gravida nunc at feugiat consequat purus. Non massa enim vitae duis mattis. Vel in ultricies vel fringilla.`,
      tags: ["Design", "Research", "Nocode"],
    },
  ];
  return (
    <main className="w-3/4 h-screen">
      <div className="flex items-center justify-end p-6">
        <Button variant="outline" className="text-lg font-bold text-[#D80000]">
          Log out
        </Button>
      </div>
      <div className="p-6 ml-10 flex flex-col items-start justify-center gap-8">
        <p className="text-[#363430] text-xl font-medium">Results</p>
        <div className="md:grid md:grid-cols-2 sm:flex sm:flex-col gap-6">
          {generatedPosts.map((post, idx) => (
            <GeneratedPost
              key={idx}
              icon={post.icon}
              title={post.title}
              content={post.content}
              tags={post.tags}
            />
          ))}
        </div>
      </div>
    </main>
  );
}
