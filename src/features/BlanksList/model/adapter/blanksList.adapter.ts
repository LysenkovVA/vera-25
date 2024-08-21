import { createEntityAdapter } from "@reduxjs/toolkit";
import { Blank } from "@/entities/Blank";

export const blanksListAdapter = createEntityAdapter<Blank, string>({
  selectId: (entity) => entity.id,
});
