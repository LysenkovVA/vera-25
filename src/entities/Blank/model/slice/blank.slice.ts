import { createSlice } from "@reduxjs/toolkit";
import { BlankSchema } from "../types/blank.schema";
import { fetchBlankByIdService } from "@/entities/Blank/model/services/fetchBlank.service";

const initialState: BlankSchema = {
  blank: undefined,
  blankFormData: undefined,
  isLoading: false,
  error: undefined,
  _isInitialized: false,
};

export const blankSlice = createSlice({
  name: "blankSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBlankByIdService.pending, (state, action) => {
        state.isLoading = true;
        state.error = undefined;
        state._isInitialized = false;
      })
      .addCase(fetchBlankByIdService.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = undefined;
        state.blank = action.payload;
        state.blankFormData = action.payload;
        state._isInitialized = true;
      })
      .addCase(fetchBlankByIdService.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
        state.blank = undefined;
        state.blankFormData = undefined;
      });
  },
});

export const { actions: blankSliceActions, reducer: blankSliceReducer } =
  blankSlice;
