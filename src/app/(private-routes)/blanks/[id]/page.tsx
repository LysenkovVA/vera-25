import { memo } from "react";
import { fetchBlankByIdAction } from "@/app/api/blanks/[id]/fetchBlankById.action";
import { BlankBreadCrumb } from "@/features/BlankBreadCrumb";
import { Flex } from "antd";
import { BlankView } from "@/entities/Blank";

interface BlankPageProps {
  params: { id: string };
}

const BlankPage = memo(async ({ params }: BlankPageProps) => {
  const data = await fetchBlankByIdAction(params.id);

  return (
    <Flex vertical>
      <BlankBreadCrumb id={params.id} name={data?.name ?? "Неизвестный id"} />
      <BlankView blank={data} />
    </Flex>
  );
});

export default BlankPage;
