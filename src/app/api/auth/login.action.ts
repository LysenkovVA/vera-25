"use server";
import { signIn } from "../../../../auth";
import { redirect } from "next/navigation";

export async function loginAction(formData: FormData) {
  try {
    console.log("LOGIN:", JSON.stringify(formData));
    await signIn("credentials", { ...formData, redirect: false });
  } catch (error) {
    console.log("ERROR at loginAction", JSON.stringify(error, null, 2));
  }
}
