"use server";
import { signIn } from "../../auth";
import { redirect } from "next/navigation";

export async function loginAction(formData: FormData) {
  console.log("LOGIN:", JSON.stringify(formData));
  await signIn("credentials", formData);
}
