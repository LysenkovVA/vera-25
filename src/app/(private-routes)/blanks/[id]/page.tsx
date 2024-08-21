import { memo } from "react";
import { fetchBlankByIdAction } from "@/app/api/blanks/[id]/fetchBlankById.action";
import { BlankBreadCrumb } from "@/features/BlankBreadCrumb";

interface BlankPageProps {
  params: { id: string };
}

const BlankPage = memo(async ({ params }: BlankPageProps) => {
  const data = await fetchBlankByIdAction(params.id);

  return (
    <>
      <BlankBreadCrumb id={params.id} name={data?.name ?? "Неизвестный id"} />
      <h1>{JSON.stringify(data)}</h1>
    </>
  );
});

export default BlankPage;
