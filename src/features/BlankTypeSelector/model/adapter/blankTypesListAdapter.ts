import { createEntityAdapter } from "@reduxjs/toolkit";
import { BlankType } from "@/entities/BlankType";

export const blankTypesListAdapter = createEntityAdapter<BlankType, string>({
  selectId: (entity) => entity.id,
});
