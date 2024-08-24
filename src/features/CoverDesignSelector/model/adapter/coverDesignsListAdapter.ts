import { createEntityAdapter } from "@reduxjs/toolkit";
import { CoverDesign } from "@/entities/CoverDesign";

export const coverDesignsListAdapter = createEntityAdapter<CoverDesign, string>(
  {
    selectId: (entity) => entity.id,
  },
);
