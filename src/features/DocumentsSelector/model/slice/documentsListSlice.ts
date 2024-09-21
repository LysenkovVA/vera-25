import { createSlice } from "@reduxjs/toolkit";
import { DocumentsListSchema } from "../types/documentsListSchema";
import { documentListAdapter } from "../adapter/documentListAdapter";
import { fetchDocumentsListService } from "@/features/DocumentsSelector/model/services/fetchDocumentsList/fetchDocumentsListService";

const initialState: DocumentsListSchema = {
  ids: [],
  entities: {},
  isLoading: false,
  error: undefined,
  _isInitialized: false,
};

export const documentsListSlice = createSlice({
  name: "documentsListSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchDocumentsListService.pending, (state, action) => {
        state.isLoading = true;
        state.error = undefined;
        // Если данные заменяются
        if (action.meta.arg.replaceData) {
          // Очищаем старые
          documentListAdapter.removeAll(state);
        }
      })
      .addCase(fetchDocumentsListService.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = undefined;

        // Если данные заменяются
        if (action.meta.arg.replaceData) {
          // Записываем новые данные
          documentListAdapter.setAll(state, action.payload);
        } else {
          // Добавляем порцию данных
          documentListAdapter.addMany(state, action.payload);
        }

        state._isInitialized = true;
      })
      .addCase(fetchDocumentsListService.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;

        // Если данные заменяются
        if (action.meta.arg.replaceData) {
          // Очищаем старые
          documentListAdapter.removeAll(state);
        }
      });
  },
});

export const { actions: documentsListActions, reducer: documentsListReducer } =
  documentsListSlice;
