import { configureStore, Reducer } from "@reduxjs/toolkit";
import {
  createReducerManager,
  TStore,
} from "@/shared/lib/Providers/StoreProvider/config/ReducerManager";
import { StateSchema } from "@/shared/lib/Providers/StoreProvider/config/StateSchema";

export const makeStore = () => {
  // TODO -Здесь возможно необходимо сразу грузить статические редюсеры
  // Для проверки что нет ошибки с редюсерами при старте приложения добавил этот редюсер
  const reducerManager = createReducerManager({
    // blanksList: blanksListReducer,
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
