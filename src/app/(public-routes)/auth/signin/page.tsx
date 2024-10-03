import { redirect } from "next/navigation";
import { auth } from "../../../../../auth";
import SignInForm from "@/shared/UI/Auth/SignInForm/SignInForm";

interface Props {
  searchParams: {
    callbackUrl?: string;
  };
}

export default async function SignInPage({ searchParams }: Props) {
  const session = await auth();
  // Если пользователь залогинен
  if (session && session.user) {
    redirect(searchParams.callbackUrl || "/");
  }

  return <SignInForm />;
}
