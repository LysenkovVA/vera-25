import { createEntityAdapter } from "@reduxjs/toolkit";
import { LaminateMethod } from "@/entities/LaminateMethod";

export const laminateMethodsListAdapter = createEntityAdapter<
  LaminateMethod,
  string
>({
  selectId: (entity) => entity.id,
});
