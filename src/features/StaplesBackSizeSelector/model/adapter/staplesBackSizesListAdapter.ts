import { createEntityAdapter } from "@reduxjs/toolkit";
import { StaplesBackSize } from "@/entities/StaplesBackSize";

export const staplesBackSizesListAdapter = createEntityAdapter<
  StaplesBackSize,
  string
>({
  selectId: (entity) => entity.id,
});
