export async function fetchResearchMethodsCountAction() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_PATH}/research-methods/count`,
  );
  return await res.json();
}
