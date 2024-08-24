import { createEntityAdapter } from "@reduxjs/toolkit";
import { CoverColor } from "@/entities/CoverColor";

export const coverColorsListAdapter = createEntityAdapter<CoverColor, string>({
  selectId: (entity) => entity.id,
});
