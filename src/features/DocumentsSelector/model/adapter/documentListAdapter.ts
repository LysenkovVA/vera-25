import { createEntityAdapter } from "@reduxjs/toolkit";
import { Document } from "@/entities/Document";

export const documentListAdapter = createEntityAdapter<Document, string>({
  selectId: (entity) => entity.id,
});
