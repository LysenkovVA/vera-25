"use client";

import { Button } from "antd";
import { signOutAction } from "@/app/api/auth/sign-out.action";
import { LogoutOutlined } from "@ant-design/icons";

const SignOutButton = () => {
  return (
    <Button
      icon={<LogoutOutlined style={{ color: "red" }} />}
      onClick={signOutAction}
    >
      Выход
    </Button>
  );
};

export default SignOutButton;
