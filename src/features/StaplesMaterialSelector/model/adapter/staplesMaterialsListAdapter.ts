import { createEntityAdapter } from "@reduxjs/toolkit";
import { StaplesMaterial } from "@/entities/StaplesMaterial";

export const staplesMaterialsListAdapter = createEntityAdapter<
  StaplesMaterial,
  string
>({
  selectId: (entity) => entity.id,
});
