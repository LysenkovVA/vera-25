import { ServerResponse } from "@/shared/lib/responses/ServerResponse";
import { Document } from "@/entities/Document";

export async function fetchDocuments(
  skip?: number,
  take?: number,
  search?: string,
): Promise<ServerResponse<Document[]>> {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_PATH}/documents?skip=${skip}&take=${take}&search=${search}`,
  );
  return await response.json();
}
