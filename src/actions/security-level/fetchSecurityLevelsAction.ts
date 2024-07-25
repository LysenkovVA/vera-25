export async function fetchSecurityLevelsAction() {
  const res = await fetch("http://localhost:3000/api/security-level", {
    cache: "force-cache",
  });
  return await res.json();
}
