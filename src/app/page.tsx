"use client";
import { useEffect } from "react";
import { Col, Form, Row, Image, Input, Button } from "antd";
import Link from "next/link";
import logo from "../../public/logo.png";
import { loginAction } from "@/actions/login.action";
import { useSession } from "next-auth/react";
import { redirect, useRouter } from "next/navigation";

const Login = () => {
  const session = useSession();
  const router = useRouter();

  useEffect(() => {
    if (session.data?.user) {
      router.push("/collection");
    }
  }, [router, session.data?.user]);

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
          <Form.Item name={"email"}>
            <Input placeholder={"Укажите e-mail"} />
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
            >
              Войти
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
};

export default Login;
