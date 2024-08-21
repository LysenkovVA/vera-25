import { Blank } from "@/entities/Blank";

export async function fetchBlankByIdAction(id: string) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_PATH}/blanks/${id}`);

  return (await res.json()) as Blank;
}
