import { configureStore, Reducer } from "@reduxjs/toolkit";
import {
  createReducerManager,
  TStore,
} from "@/shared/lib/Providers/StoreProvider/config/ReducerManager";
import { StateSchema } from "@/shared/lib/Providers/StoreProvider/config/StateSchema";
import { documentsListReducer } from "@/features/DOCUMENTS/DocumentsList/model/slice/documentsListSlice";
import { blanksListReducer } from "@/features/BLANKS/BlanksList/model/slice/blanksList.slice";

export const makeStore = () => {
  // Чтобы не было ошибки при загрузке приложения, о том что не иницилизирован Store,
  // нужно добавить редюсеры
  // Также уходит warning по селекторам
  const reducerManager = createReducerManager({
    blanksList: blanksListReducer,
    documentsList: documentsListReducer,
  });

  const store = configureStore({
    reducer: reducerManager.reduce as Reducer<StateSchema>,
    devTools: true, // TODO -Переменная для разработки
    preloadedState: {} as StateSchema,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: false, // Чтобы даты на форме не выдавали ошибок в консоль
      }),
  }) as TStore;

  // Optional: Put the reducer manager on the store so it is easily accessible
  store.reducerManager = reducerManager;

  return store;
};

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];

export interface ThunkConfig<T> {
  // Переопределяем стандартные типы конфига
  rejectValue: T;
  state: RootState;
}
