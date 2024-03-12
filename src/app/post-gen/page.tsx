import Logo from "@/components/Logo";
import PostGenForm from "@/components/PostGenForm";
import LinkedInMockPost from "@/components/LinkedInMockPost";
import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";

export default async function LinkedPostGenerator() {

  const supabase = createClient();

  const { data, error } = await supabase.auth.getUser();
  if (error || !data?.user) {
    redirect("/login");
  }

  const posts = [
    {
      img: "/panda.png",
      author: "Panda Media",
      description: `[Historical Fact] The West first learned of the giant panda
          on 11 March 1869,
      when the French missionary Armand David received a skin from a
          hunter.In 1936,
      Ruth Harkness became the first Westerner to bring back a live giant
          panda.`,
      tags: [],
    },
    {
      img: "/panda.png",
      author: "Panda Media",
      description: `[Fascinating] Here are 10 facts about pandas: https://lnkd.in/pandamedia.
👉  They have great camouflage for their environment.
👉  Their eyes are different to normal bears. `,
      tags: ["#panda", "#fascinating", "#panda"],
    },
    {
      img: "/panda.png",
      author: "Panda Media",
      description: `[Fascinating] Here are 10 facts about pandas: https://lnkd.in/pandamedia.
👉  They have great camouflage for their environment.
👉  Their eyes are different to normal bears. `,
      tags: ["#panda", "#fascinating", "#panda"],
    },
  ];

  const reactions = [
    "/likeReaction.png",
    "/clapReaction.png",
    "/heartReaction.png",
    "/ideaReaction.png",
    "/thinkingReaction.png",
    "/loveReaction.png",
  ];

  return (
    <main className="min-h-screen lg:pl-20 w-full">
      <div className="flex flex-col md:flex-row items-center md:items-start justify-center">
        <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start justify-center gap-y-12 mt-12 px-6">
          <Logo />
          <div className="flex flex-col items-center lg:items-start justify-center w-full">
            <h1 className="text-3xl text-center lg:text-left lg:text-5xl text-[#363430] font-semibold mb-6">
              <span className="inline lg:block mb-4">Youtube video to</span> LinkedIn Post
              Generator
            </h1>
            <p className="text-lg text-center lg:text-left md:text-2xl text-[#91908F]">
              Generate 2 unique SEO blog for your next viral video.
            </p>
          </div>
          <PostGenForm />
        </div>
        <div className="w-full md:w-1/2 bg-[#E4E6EA] h-full py-2 px-6 hidden lg:block">
          <div className="flex flex-col items-center justify-center gap-y-4 mt-12">
            {posts.map((post, idx) => (
              <LinkedInMockPost
                key={idx}
                img={post.img}
                author={post.author}
                description={post.description}
                reactions={reactions}
                tags={post.tags}
              />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
