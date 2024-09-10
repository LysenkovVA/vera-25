import { createEntityAdapter } from "@reduxjs/toolkit";
import { ResearchMethod } from "@/entities/ResearchMethod";

export const researchMethodsListAdapter = createEntityAdapter<
  ResearchMethod,
  string
>({
  selectId: (entity) => entity.id,
});
