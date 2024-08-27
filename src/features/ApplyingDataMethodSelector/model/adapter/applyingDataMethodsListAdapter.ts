import { createEntityAdapter } from "@reduxjs/toolkit";
import { ApplyingDataMethod } from "@/entities/ApplyingDataMethod";

export const applyingDataMethodsListAdapter = createEntityAdapter<
  ApplyingDataMethod,
  string
>({
  selectId: (entity) => entity.id,
});
