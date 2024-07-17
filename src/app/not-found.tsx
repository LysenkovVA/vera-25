"use client";
import { Button, Result } from "antd";
import { useRouter } from "next/navigation";

export default function NotFound() {
  const router = useRouter();
  return (
    <Result
      status="404"
      title="404"
      subTitle="Упс! Похоже запрашиваемая страница не существует."
      extra={
        <Button type="primary" onClick={() => router.back()}>
          Назад
        </Button>
      }
    />
  );
}
