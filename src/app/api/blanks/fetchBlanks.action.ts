import { BlankDto } from "@/entities/Blank";

export async function fetchBlanksAction(skip: number, take: number) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_PATH}/blanks?skip=${skip}&take=${take}`,
  );

  return (await res.json()) as BlankDto[];
}
