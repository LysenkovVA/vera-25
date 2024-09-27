import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { message } from "antd";
import { DocumentsListSchema } from "../types/documentsListSchema";
import { fetchDocumentsListService } from "../services/fetchDocumentsList/fetchDocumentsListService";
import { documentsListAdapter } from "../adapter/documentsListAdapter";

const initialState: DocumentsListSchema = {
  ids: [],
  entities: {},
  isLoading: false,
  error: undefined,
  take: 5,
  skip: 0,
  search: "",
  totalCount: 0,
  _isInitialized: false,
};

export const documentsListSlice = createSlice({
  name: "documentsListSlice",
  initialState,
  reducers: {
    setSkip: (state, action: PayloadAction<number>) => {
      state.skip = action.payload;
      state._isInitialized = false;
    },
    setSearchQuery: (state, action: PayloadAction<string>) => {
      state.search = action.payload;
      state.skip = 0;
      state._isInitialized = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchDocumentsListService.pending, (state, action) => {
        state.isLoading = true;
        state.error = undefined;
        state.totalCount = 0;

        // Если данные заменяются
        if (action.meta.arg.replaceData) {
          // Очищаем старые
          documentsListAdapter.removeAll(state);
        }
      })
      .addCase(fetchDocumentsListService.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = undefined;

        // Если данные заменяются
        if (action.meta.arg.replaceData) {
          // Записываем новые данные
          documentsListAdapter.setAll(state, action.payload.data!);
        } else {
          // Добавляем порцию данных
          documentsListAdapter.addMany(state, action.payload.data!);
        }

        state.totalCount = action.payload.pagination?.total;
        state._isInitialized = true;
      })
      .addCase(fetchDocumentsListService.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;

        // Если данные заменяются
        if (action.meta.arg.replaceData) {
          // Очищаем старые
          documentsListAdapter.removeAll(state);
        }

        state.totalCount = 0;
        message.error(action.payload);
      });
  },
});

export const { actions: documentsListActions, reducer: documentsListReducer } =
  documentsListSlice;
