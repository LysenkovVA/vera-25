"use client";
import { Button, Col, Form, Image, Input, Row } from "antd";
import Link from "next/link";
import logo from "../../public/logo.png";
import { loginAction } from "@/app/api/auth/login.action";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { useEffect } from "react";

export default function Login() {
  console.log("Login page render");

  const session = useSession();
  const router = useRouter();

  console.log(JSON.stringify(session));

  useEffect(() => {
    if (session.status === "authenticated" && session.data?.user) {
      router.push("/blanks");
    }
  }, [router, session.data?.user, session.status]);

  return (
    <Form
      style={{
        marginTop: "10%",
      }}
      onFinish={loginAction}
      layout={"vertical"}
    >
      <Row justify={"center"} align={"middle"}>
        <Col>
          <Image src={logo.src} alt={"logo"} width={100} preview={false} />
        </Col>
      </Row>
      <Row justify={"center"} align={"middle"}>
        <Col span={10}>
          <Form.Item name={"login"}>
            <Input placeholder={"Укажите логин"} />
          </Form.Item>
        </Col>
      </Row>
      <Row justify={"center"} align={"middle"}>
        <Col span={10}>
          <Form.Item name={"password"}>
            <Input placeholder={"Укажите пароль"} type={"password"} />
          </Form.Item>
        </Col>
      </Row>
      <Row justify={"center"} align={"middle"}>
        <Col span={4}>
          <Form.Item>
            <Button
              type={"primary"}
              htmlType={"submit"}
              style={{ width: "100%" }}
              // onSubmit={(e) => e.preventDefault()}
            >
              {"Войти"}
            </Button>
          </Form.Item>
        </Col>
      </Row>
      <Row justify={"center"} align={"middle"}>
        <Col span={12}>
          <Form.Item>
            <div
              style={{
                display: "flex",
                gap: 4,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              Нет аккаунта? <Link href={"/sign-up"}>Зарегистрироваться</Link>
            </div>
          </Form.Item>
        </Col>
      </Row>
    </Form>
  );
}

// export default Login;
