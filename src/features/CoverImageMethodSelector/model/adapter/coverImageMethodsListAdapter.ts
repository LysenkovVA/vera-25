import { createEntityAdapter } from "@reduxjs/toolkit";
import { CoverImageMethod } from "@/entities/CoverImageMethod";

export const coverImageMethodsListAdapter = createEntityAdapter<
  CoverImageMethod,
  string
>({
  selectId: (entity) => entity.id,
});
