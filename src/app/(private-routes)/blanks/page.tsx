import { memo } from "react";
import { BlanksList } from "@/features/BlanksList";

const BlanksPage = memo(() => {
  return (
    <>
      <BlanksList />
    </>
  );
});

export default BlanksPage;
