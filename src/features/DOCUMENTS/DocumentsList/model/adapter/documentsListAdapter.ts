import { createEntityAdapter } from "@reduxjs/toolkit";
import { Document } from "@/entities/Document";

export const documentsListAdapter = createEntityAdapter<Document, string>({
  selectId: (entity) => entity.id,
});
