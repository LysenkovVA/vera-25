import { createEntityAdapter } from "@reduxjs/toolkit";
import { DetailType } from "@/entities/DetailType";

export const detailTypesListAdapter = createEntityAdapter<DetailType, string>({
  selectId: (entity) => entity.id,
});
