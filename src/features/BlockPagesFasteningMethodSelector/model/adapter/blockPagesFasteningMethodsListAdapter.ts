import { createEntityAdapter } from "@reduxjs/toolkit";
import { BlockPagesFasteningMethod } from "@/entities/BlockPagesFasteningMethod";

export const blockPagesFasteningMethodsListAdapter = createEntityAdapter<
  BlockPagesFasteningMethod,
  string
>({
  selectId: (entity) => entity.id,
});
