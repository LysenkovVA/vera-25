"use client"; // Error components must be Client Components

import { useEffect } from "react";
import { Button, Result, Space } from "antd";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error("Ошибка (global-error)", error);
  }, [error]);

  return (
    <Result
      status="error"
      title={"Похоже что-то пошло не так"}
      subTitle={`${error.message} (Digest: ${error.digest})`}
      extra={
        <Button type="primary" onClick={reset}>
          Попробовать снова
        </Button>
      }
    />
  );
}
