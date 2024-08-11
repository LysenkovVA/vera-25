"use client";

import { useSession } from "next-auth/react";
import LoadingIndicator from "@/shared/UI/LoadingIndicator";
import { useRouter } from "next/navigation";
import { Card } from "antd";

const ProfilePage = () => {
  const session = useSession();
  const router = useRouter();

  if (session.status === "loading") {
    return <LoadingIndicator />;
  }

  if (session.status === "unauthenticated") {
    router.push("/denied");
  }

  return (
    <Card
      title={`Логин: ${session.data?.user.login} (роль - ${session.data?.user.role.name})`}
    >
      <div>{JSON.stringify(session.data?.user)}</div>
      <div>{session.data?.user.profile.surname}</div>
      <div>{session.data?.user.profile.name}</div>
    </Card>
  );
};

export default ProfilePage;
