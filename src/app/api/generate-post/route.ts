import { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { link, tone } = body;

  console.log(body);

  //Call to Supabase
  //Call to OpenAI
  //Send response
}
