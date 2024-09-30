import { ServerResponse } from "@/shared/lib/responses/ServerResponse";
import { Document } from "@/entities/Document";

export async function fetchDocumentById(
  id: string,
): Promise<ServerResponse<Document>> {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_PATH}/documents/${id}`,
  );
  return await response.json();
}
