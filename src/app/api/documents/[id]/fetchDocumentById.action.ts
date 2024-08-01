export async function fetchDocumentByIdAction(id: string) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_PATH}/documents/${id}`,
  );
  return await res.json();
}
