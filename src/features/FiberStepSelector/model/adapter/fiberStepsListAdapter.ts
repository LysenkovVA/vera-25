import { createEntityAdapter } from "@reduxjs/toolkit";
import { FiberStep } from "@/entities/FiberStep";

export const fiberStepsListAdapter = createEntityAdapter<FiberStep, string>({
  selectId: (entity) => entity.id,
});
