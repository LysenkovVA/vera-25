import { createEntityAdapter } from "@reduxjs/toolkit";
import { StaplesDistance } from "@/entities/StaplesDistance";

export const staplesDistancesListAdapter = createEntityAdapter<
  StaplesDistance,
  string
>({
  selectId: (entity) => entity.id,
});
