export async function fetchBlanksAction() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_PATH}/blanks`);
  return await res.json();
}
