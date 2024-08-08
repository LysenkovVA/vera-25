import { BlankDto } from "@/entities/Blank";

export async function createBlankAction(data: BlankDto) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_PATH}/blanks/create`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return await res.json();
}
