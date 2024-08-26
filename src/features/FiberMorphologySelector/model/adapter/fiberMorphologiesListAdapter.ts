import { createEntityAdapter } from "@reduxjs/toolkit";
import { FiberMorphology } from "@/entities/FiberMorphology";

export const fiberMorphologiesListAdapter = createEntityAdapter<
  FiberMorphology,
  string
>({
  selectId: (entity) => entity.id,
});
