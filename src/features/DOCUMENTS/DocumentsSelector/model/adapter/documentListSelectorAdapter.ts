import { createEntityAdapter } from "@reduxjs/toolkit";
import { Document } from "@/entities/Document";

export const documentListSelectorAdapter = createEntityAdapter<
  Document,
  string
>({
  selectId: (entity) => entity.id,
});
