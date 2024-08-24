import { createEntityAdapter } from "@reduxjs/toolkit";
import { CoverTexture } from "@/entities/CoverTexture";

export const coverTexturesListAdapter = createEntityAdapter<
  CoverTexture,
  string
>({
  selectId: (entity) => entity.id,
});
