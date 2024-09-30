import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { DocumentSchema } from "../types/DocumentSchema";
import { fetchDocumentByIdService } from "../services/fetchDocumentById.service";
import { Document } from "@/entities/Document";

const initialState: DocumentSchema = {
  document: undefined,
  documentFormData: undefined,
  isLoading: false,
  error: undefined,
  _isInitialized: false,
};

export const documentSlice = createSlice({
  name: "documentSlice",
  initialState,
  reducers: {
    setFormData: (state, action: PayloadAction<Document>) => {
      state.documentFormData = { ...state.documentFormData, ...action.payload };
    },
    clearAllData: (state, action) => {
      state.document = undefined;
      state.documentFormData = undefined;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchDocumentByIdService.pending, (state, action) => {
        state.isLoading = true;
        state.error = undefined;
        state._isInitialized = false;
      })
      .addCase(fetchDocumentByIdService.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = undefined;
        state.document = action.payload.data;
        state.documentFormData = action.payload.data;
        state._isInitialized = true;
      })
      .addCase(fetchDocumentByIdService.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
        state.document = undefined;
        state.documentFormData = undefined;
      });
  },
});

export const { actions: documentSliceActions, reducer: documentSliceReducer } =
  documentSlice;
