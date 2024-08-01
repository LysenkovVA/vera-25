export async function fetchDocumentsCountAction() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_PATH}/documents/count`,
  );
  return await res.json();
}
