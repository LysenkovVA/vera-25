"use server";
import { NextResponse } from "next/server";
import { NextApiRequest, NextApiResponse } from "next";

export async function GET(request: Request, response: Response) {
  return NextResponse.json("receiving image data here...");
}

export async function POST(request: NextApiRequest, response: NextApiResponse) {
  // const session = await auth();

  return NextResponse.json({ req: { ...request } });

  // if (!session?.user.login) {
  //   return NextResponse.json({
  //     Message: "Доступ запрещен!" + JSON.stringify(request.json()),
  //     status: 403,
  //   });
  // }
  //
  // const formData = await request.formData();
  //
  // const file = formData.get("file") as File;
  // if (!file) {
  //   return NextResponse.json({ error: "Файлы отсутствуют." }, { status: 400 });
  // }
  //
  // const buffer = Buffer.from(await file.arrayBuffer());
  // // const filename = Date.now() + file.name.replaceAll(" ", "_");
  // const filename = "avatar_" + file.name.replaceAll(" ", "_") + Date.now();
  // console.log(filename);
  // try {
  //   await writeFile(
  //     path.join(process.cwd(), `private/users/test_user/avatar/${filename}`),
  //     buffer,
  //   );
  //   return NextResponse.json({ Message: "Успех", status: 201 });
  // } catch (error) {
  //   console.log("Произошла ошибка: ", error);
  //   return NextResponse.json({ Message: "Ошибка", status: 500 });
  // }
}
