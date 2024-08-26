import { createEntityAdapter } from "@reduxjs/toolkit";
import { FiberColor } from "@/entities/FiberColor";

export const fiberColorsListAdapter = createEntityAdapter<FiberColor, string>({
  selectId: (entity) => entity.id,
});
