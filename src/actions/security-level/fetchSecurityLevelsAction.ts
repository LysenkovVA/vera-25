export async function fetchSecurityLevelsAction() {
  const res = await fetch("http://localhost:3000/api/security-level", {
    cache: "no-cache",
  });
  return await res.json();
}
