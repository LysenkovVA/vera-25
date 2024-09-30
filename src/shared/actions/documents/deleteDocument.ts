import { Document } from "@/entities/Document";
import { ServerResponse } from "@/shared/lib/responses/ServerResponse";

export async function deleteDocument(
  id: string,
): Promise<ServerResponse<Document>> {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_PATH}/documents/${id}`,
    {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    },
  );

  return await response.json();
}
