import { createEntityAdapter } from "@reduxjs/toolkit";
import { ControlParameterValue } from "@/entities/ControlParameterValue";

export const controlParameterValuesListAdapter = createEntityAdapter<
  ControlParameterValue,
  string
>({
  selectId: (entity) => entity.id,
});
