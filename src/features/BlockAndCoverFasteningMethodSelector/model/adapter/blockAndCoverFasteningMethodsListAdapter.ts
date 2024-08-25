import { createEntityAdapter } from "@reduxjs/toolkit";
import { BlockAndCoverFasteningMethod } from "@/entities/BlockAndCoverFasteningMethod";

export const blockAndCoverFasteningMethodsListAdapter = createEntityAdapter<
  BlockAndCoverFasteningMethod,
  string
>({
  selectId: (entity) => entity.id,
});
