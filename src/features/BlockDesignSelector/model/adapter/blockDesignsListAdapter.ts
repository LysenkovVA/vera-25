import { createEntityAdapter } from "@reduxjs/toolkit";
import { BlockDesign } from "@/entities/BlockDesign";

export const blockDesignsListAdapter = createEntityAdapter<BlockDesign, string>(
  {
    selectId: (entity) => entity.id,
  },
);
