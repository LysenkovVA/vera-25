"use client";

import { useSession } from "next-auth/react";
import LoadingIndicator from "@/shared/UI/LoadingIndicator";
import { useRouter } from "next/navigation";

const ProfilePage = () => {
  const session = useSession();
  const router = useRouter();

  if (session.status === "loading") {
    return <LoadingIndicator />;
  }

  if (session.status === "unauthenticated") {
    router.push("/denied");
  }

  return <div>{`Профиль пользователя ${JSON.stringify(session.data)}`}</div>;
};

export default ProfilePage;
