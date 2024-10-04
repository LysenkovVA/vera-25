import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "@/shared/lib/Providers/StoreProvider/config/store";
import { documentsListActions } from "@/features/DOCUMENTS/DocumentsList/model/slice/documentsListSlice";
import { fetchDocumentsListService } from "@/features/DOCUMENTS/DocumentsList/model/services/fetchDocumentsList/fetchDocumentsListService";

export const initializeDocumentsListService = createAsyncThunk<
  void,
  URLSearchParams,
  ThunkConfig<string>
>("initializeDocumentsListService", async (searchParams, thunkApi) => {
  const { dispatch, rejectWithValue, getState } = thunkApi;

  const page = searchParams.get("page");

  if (page) {
    dispatch(documentsListActions.setPage(Number(page)));
  }

  dispatch(documentsListActions.initializeState());
  dispatch(fetchDocumentsListService({ replaceData: true }));

  // try {
  //   // TODO селектор выдает ошибку
  //   // const isInitialized = useAppSelector(getDocumentsListIsInitialized);
  //   //
  //   // if (!isInitialized) {
  //   //   const page = searchParams.get("page");
  //   //
  //   //   // if (page) {
  //   //   //   dispatch(documentsListActions.setPage(Number(page)));
  //   //   // }
  //   //
  //   //   // dispatch(documentsListActions.initializeState());
  //   //   // dispatch(fetchDocumentsListService({ replaceData: true }));
  //   // }
  // } catch (e) {
  //   return rejectWithValue(
  //     `Произошла неизвестная ошибка при инициализации списка документов: ${JSON.stringify(e)}`,
  //   );
  // }
});
