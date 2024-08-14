"use client";

import { useSession } from "next-auth/react";
import LoadingIndicator from "@/shared/UI/LoadingIndicator";
import { Avatar, Card, Flex, Typography } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { memo } from "react";

const Text = Typography;

interface ProfilePageProps {}

const ProfilePage = memo((props: ProfilePageProps) => {
  const session = useSession();

  if (session.status === "loading") {
    return <LoadingIndicator />;
  }

  return (
    <Card title={`${session.data?.user?.login}`}>
      <Flex vertical align={"center"} justify={"center"}>
        <Avatar size={128} icon={<UserOutlined />} />
        <Text.Title>{`${session.data?.user?.profile?.surname} ${session.data?.user?.profile.name}`}</Text.Title>
        <Text.Title>{`${session.data?.user?.id}`}</Text.Title>
      </Flex>
    </Card>
  );
});

export default ProfilePage;
