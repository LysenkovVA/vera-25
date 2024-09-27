import { createSlice } from "@reduxjs/toolkit";
import { DocumentsListSelectorSchema } from "../types/documentsListSelectorSchema";
import { documentListSelectorAdapter } from "../adapter/documentListSelectorAdapter";
import { fetchDocumentsListSelectorService } from "@/features/DOCUMENTS/DocumentsSelector/model/services/fetchDocumentsListSelectorService/fetchDocumentsListSelectorService";

const initialState: DocumentsListSelectorSchema = {
  ids: [],
  entities: {},
  isLoading: false,
  error: undefined,
  _isInitialized: false,
};

export const documentsListSelectorSlice = createSlice({
  name: "documentsListSelectorSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchDocumentsListSelectorService.pending, (state, action) => {
        state.isLoading = true;
        state.error = undefined;
        // Если данные заменяются
        if (action.meta.arg.replaceData) {
          // Очищаем старые
          documentListSelectorAdapter.removeAll(state);
        }
      })
      .addCase(fetchDocumentsListSelectorService.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = undefined;

        // Если данные заменяются
        if (action.meta.arg.replaceData) {
          // Записываем новые данные
          documentListSelectorAdapter.setAll(state, action.payload);
        } else {
          // Добавляем порцию данных
          documentListSelectorAdapter.addMany(state, action.payload);
        }

        state._isInitialized = true;
      })
      .addCase(fetchDocumentsListSelectorService.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;

        // Если данные заменяются
        if (action.meta.arg.replaceData) {
          // Очищаем старые
          documentListSelectorAdapter.removeAll(state);
        }
      });
  },
});

export const {
  actions: documentsListSelectorActions,
  reducer: documentsListSelectorReducer,
} = documentsListSelectorSlice;
