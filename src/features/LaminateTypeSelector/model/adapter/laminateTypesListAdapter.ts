import { createEntityAdapter } from "@reduxjs/toolkit";
import { LaminateType } from "@/entities/LaminateType";

export const laminateTypesListAdapter = createEntityAdapter<
  LaminateType,
  string
>({
  selectId: (entity) => entity.id,
});
