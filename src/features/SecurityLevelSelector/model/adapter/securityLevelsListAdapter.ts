import { createEntityAdapter } from "@reduxjs/toolkit";
import { SecurityLevel } from "@/entities/SecurityLevel";

export const securityLevelsListAdapter = createEntityAdapter<
  SecurityLevel,
  string
>({
  selectId: (entity) => entity.id,
});
