import { createEntityAdapter } from "@reduxjs/toolkit";
import { BlockCornersDesign } from "@/entities/BlockCornersDesign";

export const blockCornersDesignsListAdapter = createEntityAdapter<
  BlockCornersDesign,
  string
>({
  selectId: (entity) => entity.id,
});
