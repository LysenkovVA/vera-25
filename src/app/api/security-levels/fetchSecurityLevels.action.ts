export async function fetchSecurityLevelsAction() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_PATH}/security-levels`,
  );
  return await res.json();
}
