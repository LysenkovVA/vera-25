"use client";

import { Avatar, Flex, Typography } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const Text = Typography;

const ProfileAvatar = () => {
  const session = useSession();
  const router = useRouter();

  return (
    <Flex
      style={{ cursor: "pointer" }}
      vertical
      align={"center"}
      justify={"center"}
      onClick={() => {
        router.push("/profile");
      }}
    >
      <Avatar
        size={"large"}
        shape={"circle"}
        icon={<UserOutlined style={{ backgroundColor: "grey" }} />}
      />
      <Text style={{ color: "white" }}>{session.data?.user?.login}</Text>
    </Flex>
  );
};

export default ProfileAvatar;
