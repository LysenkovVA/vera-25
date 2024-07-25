export async function fetchSecurityLevelsAction() {
  const res = await fetch("http://localhost:3000/api/security-levels");
  return await res.json();
}
