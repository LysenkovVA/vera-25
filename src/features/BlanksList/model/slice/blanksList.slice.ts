import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { BlanksListSchema } from "@/features/BlanksList/model/types/blanksList.schema";
import { blanksListAdapter } from "@/features/BlanksList/model/adapter/blanksList.adapter";
import { fetchBlanksListService } from "@/features/BlanksList/model/services/fetchBlanksList/fetchBlanksList.service";
import { upsertBlankService } from "@/entities/Blank/model/services/upsertBlankService";

const initialState: BlanksListSchema = {
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

export const blanksListSlice = createSlice({
  name: "blanksListSlice",
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
      .addCase(fetchBlanksListService.pending, (state, action) => {
        state.isLoading = true;
        state.error = undefined;
        state.totalCount = 0;

        // Если данные заменяются
        if (action.meta.arg.replaceData) {
          // Очищаем старые
          blanksListAdapter.removeAll(state);
        }
      })
      .addCase(fetchBlanksListService.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = undefined;

        // Если данные заменяются
        if (action.meta.arg.replaceData) {
          // Записываем новые данные
          blanksListAdapter.setAll(state, action.payload.data!);
        } else {
          // Добавляем порцию данных
          blanksListAdapter.addMany(state, action.payload.data!);
        }

        state.totalCount = action.payload.pagination?.total;
        state._isInitialized = true;
      })
      .addCase(fetchBlanksListService.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
        state.totalCount = 0;

        // Если данные заменяются
        if (action.meta.arg.replaceData) {
          // Очищаем старые
          blanksListAdapter.removeAll(state);
        }
      })
      // Добавление бланка
      .addCase(upsertBlankService.fulfilled, (state, action) => {
        blanksListAdapter.upsertOne(state, action.payload);
        // blanksListAdapter.addOne(state, action.payload);
        if (state.totalCount) {
          state.totalCount = state.ids.length;
        } else {
          state.totalCount = 1;
        }
      });
  },
});

export const { actions: blanksListActions, reducer: blanksListReducer } =
  blanksListSlice;
