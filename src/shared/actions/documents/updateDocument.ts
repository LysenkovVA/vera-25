import { ServerResponse } from "@/shared/lib/responses/ServerResponse";
import { Document } from "@/entities/Document";

export async function updateDocument(
  document: Document,
): Promise<ServerResponse<Document>> {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_PATH}/documents/${document.id}`,
    {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(document),
    },
  );

  return await response.json();
}
