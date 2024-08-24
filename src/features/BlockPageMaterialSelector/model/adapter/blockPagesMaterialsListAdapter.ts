import { createEntityAdapter } from "@reduxjs/toolkit";
import { BlockPagesMaterial } from "@/entities/BlockPagesMaterial";

export const blockPagesMaterialsListAdapter = createEntityAdapter<
  BlockPagesMaterial,
  string
>({
  selectId: (entity) => entity.id,
});
