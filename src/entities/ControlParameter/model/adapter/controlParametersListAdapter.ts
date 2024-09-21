import { createEntityAdapter } from "@reduxjs/toolkit";
import { ControlParameter } from "@/entities/ControlParameter";

export const controlParametersListAdapter = createEntityAdapter<
  ControlParameter,
  string
>({
  selectId: (entity) => entity.id,
});
