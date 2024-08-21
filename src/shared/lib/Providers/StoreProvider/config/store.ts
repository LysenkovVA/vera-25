import { configureStore } from "@reduxjs/toolkit";
import { blanksListReducer } from "@/features/BlanksList/model/slice/blanksList.slice";

export const makeStore = () => {
  return configureStore({
    reducer: {
      blanksList: blanksListReducer,
    },
  });
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
