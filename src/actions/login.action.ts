"use server";
import { signIn } from "../../auth";

export async function loginAction(formData: FormData) {
  console.log("LOGIN:", JSON.stringify(formData));
  await signIn("credentials", formData);
}
