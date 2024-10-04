import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { notification } from "antd";
import { DocumentsListSchema } from "../types/documentsListSchema";
import { fetchDocumentsListService } from "../services/fetchDocumentsList/fetchDocumentsListService";
import { documentsListAdapter } from "../adapter/documentsListAdapter";
import { createDocumentService } from "@/entities/Document/model/services/createDocument.service";
import { deleteDocumentService } from "@/entities/Document/model/services/deleteDocument.service";
import { updateDocumentService } from "@/entities/Document/model/services/updateDocument.service";
import { initializeDocumentsListService } from "@/features/DOCUMENTS/DocumentsList/model/services/initializeDocumentsList/initializeDocumentsList.service";

const initialState: DocumentsListSchema = {
  ids: [],
  entities: {},
  isLoading: false,
  error: undefined,
  page: 1,
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
    setPage: (state, action: PayloadAction<number>) => {
      state.page = action.payload;
      state.skip = (action.payload - 1) * state.take!;
      // state._isInitialized = false;
    },
    // setSkip: (state, action: PayloadAction<number>) => {
    //   state.skip = action.payload;
    //   state._isInitialized = false;
    // },
    // setSearchQuery: (state, action: PayloadAction<string>) => {
    //   state.search = action.payload;
    //   state.skip = 0;
    //   state._isInitialized = false;
    // },
    initializeState: (state) => {
      state._isInitialized = true;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(initializeDocumentsListService.rejected, (state, action) => {
        notification.error({
          message: "Ошибка",
          description: action.payload,
          duration: 5,
          placement: "top",
        });
      })
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
          documentsListAdapter.setAll(state, action.payload.data);
        } else {
          // Добавляем порцию данных
          documentsListAdapter.addMany(state, action.payload.data);
        }

        state.totalCount = action.payload.pagination?.total;
        // state._isInitialized = true;
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
        notification.error({
          message: "Ошибка",
          description: action.payload,
          duration: 5,
          placement: "top",
        });
      })
      // ДОБАВЛЕНИЕ ДОКУМЕНТА
      .addCase(createDocumentService.fulfilled, (state, action) => {
        documentsListAdapter.upsertOne(state, action.payload.data);

        state.totalCount = state.ids.length;

        notification.success({
          message: `Документ '${action.payload.data.name}' сохранен`,
          duration: 5,
          placement: "top",
        });
      })
      .addCase(createDocumentService.rejected, (state, action) => {
        notification.error({
          message: "Ошибка",
          description: action.payload,
          duration: 5,
          placement: "top",
        });
      })
      // Обновление документа
      .addCase(updateDocumentService.fulfilled, (state, action) => {
        documentsListAdapter.upsertOne(state, action.payload.data);
        notification.success({
          message: `Документ '${action.payload.data.name}' обновлен`,
          duration: 5,
          placement: "top",
        });
      })
      .addCase(updateDocumentService.rejected, (state, action) => {
        notification.error({
          message: "Ошибка",
          description: action.payload,
          duration: 5,
          placement: "top",
        });
      })
      // Удаление документа
      .addCase(deleteDocumentService.fulfilled, (state, action) => {
        documentsListAdapter.removeOne(state, action.payload.data.id);
        state.totalCount = state.ids.length;

        // if (state.totalCount) {
        //   state.totalCount = state.ids.length;
        // } else {
        //   state.totalCount = 0;
        // }
        notification.success({
          message: `Документ '${action.payload.data.name}' удален`,
          duration: 5,
          placement: "top",
        });
      })
      .addCase(deleteDocumentService.rejected, (state, action) => {
        notification.error({
          message: "Ошибка",
          description: action.payload,
          duration: 5,
          placement: "top",
        });
      });
  },
});

export const { actions: documentsListActions, reducer: documentsListReducer } =
  documentsListSlice;
