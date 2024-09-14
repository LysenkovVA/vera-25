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

  // Create a store with the root reducer function being the one exposed by the manager.
  // const store = createStore(
  //   reducerManager.reduce,
  //   {} as StateSchema,
  //   // rest
  // ) as TStore;

  const store = configureStore({
    reducer: reducerManager.reduce as Reducer<StateSchema>,
    devTools: true, // TODO -Переменная для разработки
    preloadedState: {} as StateSchema,
  }) as TStore;

  // Optional: Put the reducer manager on the store so it is easily accessible
  store.reducerManager = reducerManager;

  // СТАРЫЙ СТОР (РАБОЧИЙ)
  // const store = configureStore({
  //   reducer: {
  //     blanksList: blanksListReducer,
  //     blankDetails: blankSliceReducer,
  //     securityLevelsList: securityLevelsListReducer,
  //     countriesList: countriesListReducer,
  //     manufacturersList: manufacturersListReducer,
  //     coverDesignsList: coverDesignsListReducer,
  //     coverColorsList: coverColorsListReducer,
  //     coverTexturesList: coverTexturesListReducer,
  //     coverImageMethodsList: coverImageMethodsListReducer,
  //     blockDesignsList: blockDesignsListReducer,
  //     blockCornersDesignsList: blockCornersDesignsListReducer,
  //     blockPagesMaterialsList: blockPagesMaterialsListReducer,
  //     blockAndCoverFasteningMethodsList:
  //       blockAndCoverFasteningMethodsListReducer,
  //     blockPagesFasteningMethodsList: blockPagesFasteningMethodsListReducer,
  //     fiberColorsList: fiberColorsListReducer,
  //     fiberMorphologiesList: fiberMorphologiesListReducer,
  //     fiberStepsList: fiberStepsListReducer,
  //     staplesMaterialsList: staplesMaterialsListReducer,
  //     staplesBackSizesList: staplesBackSizesListReducer,
  //     staplesDistancesList: staplesDistancesListReducer,
  //     detailTypesList: detailTypesListReducer,
  //     laminateTypesList: laminateTypesListReducer,
  //     laminateMethodsList: laminateMethodsListReducer,
  //     applyingDataMethodsList: applyingDataMethodsListReducer,
  //     blankTypesList: blankTypesListReducer,
  //     researchMethodsList: researchMethodsListReducer,
  //   },
  // });

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
