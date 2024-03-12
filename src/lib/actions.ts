"use server";

import { redirect } from "next/navigation";
import { BASE_URL } from "./utils";

export async function createPost(formData: FormData) {
  const data = {
    link: formData.get("link") as string,
    mood: formData.get("mood") as string,
  };

  const moodFinal = `#${data.mood.split(",").join("#").replace(/ /g, "")}`;

  try {
    const res = await fetch(`${BASE_URL}/api/generate-post`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ link: data.link, mood: moodFinal }),
      credentials: "include"
    });

    if (res.status === 201) {
      redirect("/dashboard/post-gen");
    }
  } catch (err) {
    console.error(err);
    redirect("/error");
  }
}
