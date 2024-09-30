import { Document } from "@/entities/Document";
import { ServerResponse } from "@/shared/lib/responses/ServerResponse";

export async function createDocument(
  document: Document,
): Promise<ServerResponse<Document>> {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_PATH}/documents/create`,
    {
      method: "POST",
      body: JSON.stringify(document),
    },
  );

  return await response.json();
}
