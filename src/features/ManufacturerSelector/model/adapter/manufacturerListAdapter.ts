import { createEntityAdapter } from "@reduxjs/toolkit";
import { Manufacturer } from "@/entities/Manufacturer";

export const manufacturerListAdapter = createEntityAdapter<
  Manufacturer,
  string
>({
  selectId: (entity) => entity.id,
});
