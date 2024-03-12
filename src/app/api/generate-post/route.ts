import { createClient } from "@/lib/supabase/server";
import { NextRequest } from "next/server";

const supabase = createClient();

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { link, mood } = body;

  //Validate stuff

  console.log(body);

  //Call to Supabase
  /*
  const { data, error } = await supabase
    .from("linkedin_post_gen")
    .insert({ link: link, mood: mood })
    .select();
  */
  //Call to OpenAI
  //Call to Supabase
  //Send response
}
