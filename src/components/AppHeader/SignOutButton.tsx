"use client";

import { Button } from "antd";
import { signOutAction } from "@/actions/sign-out.action";

const SignOutButton = () => {
  return <Button onClick={signOutAction}>Выход</Button>;
};

export default SignOutButton;
