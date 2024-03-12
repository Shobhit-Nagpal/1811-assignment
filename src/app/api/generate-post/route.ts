import { createClient } from "@/lib/supabase/server";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const supabase = createClient();
  const body = await req.json();
  const { link, mood } = body;

  //Dummy data
  const title = "UX review presentations";
  const content = `How do you create compelling presentations that wow your colleagues and impress your managers? Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ullamcorper mattis lorem non. Ultrices praesent amet ipsum justo massa. Eu dolor aliquet risus gravida nunc at feugiat consequat purus. Non massa enim vitae duis mattis. Vel in ultricies vel fringilla.`;
  const tags = "#Design#Research#Nocode";

  console.log(body);

  const {data: trial} = await supabase.from("linkedin_post_gen").select();
  console.log("Got the trial", trial);

  //Call to Supabase
  const { data, error } = await supabase
    .from("linkedin_post_gen")
    .insert({
      link: link,
      mood: mood,
      post_title: title,
      post_content: content,
      post_tags: tags,
    })
    .select();

    console.log(data);
  //Call to OpenAI
  //Call to Supabase
  //Send response
  if (error) {
    console.error(error);
    return new NextResponse(`Error: ${error.message}`, {status: 500});
  }

  return new NextResponse("Post created!", {status: 201});
}
