import { configureStore } from "@reduxjs/toolkit";
import { blanksListReducer } from "@/features/BlanksList/model/slice/blanksList.slice";
import { blankSliceReducer } from "@/entities/Blank";
import { securityLevelsListReducer } from "@/features/SecurityLevelSelector";
import { countriesListReducer } from "@/features/CountrySelector/model/slice/countriesListSlice";

export const makeStore = () => {
  return configureStore({
    reducer: {
      blanksList: blanksListReducer,
      blankDetails: blankSliceReducer,
      securityLevelsList: securityLevelsListReducer,
      countriesList: countriesListReducer,
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
