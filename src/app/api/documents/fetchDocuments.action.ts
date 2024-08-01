export async function fetchDocumentsAction() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_PATH}/documents`);
  return await res.json();
}
