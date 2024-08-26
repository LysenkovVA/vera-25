import { configureStore } from "@reduxjs/toolkit";
import { blanksListReducer } from "@/features/BlanksList/model/slice/blanksList.slice";
import { blankSliceReducer } from "@/entities/Blank";
import { securityLevelsListReducer } from "@/features/SecurityLevelSelector";
import { countriesListReducer } from "@/features/CountrySelector/model/slice/countriesListSlice";
import { manufacturersListReducer } from "@/features/ManufacturerSelector";
import { coverDesignsListReducer } from "@/features/CoverDesignSelector";
import { coverColorsListReducer } from "@/features/CoverColorSelector/model/slice/coverColorsListSlice";
import { coverTexturesListReducer } from "@/features/CoverTextureSelector";
import { coverImageMethodsListReducer } from "@/features/CoverImageMethodSelector";
import { blockDesignsListReducer } from "@/features/BlockDesignSelector";
import { blockCornersDesignsListReducer } from "@/features/BlockCornerDesignSelector";
import { blockPagesMaterialsListReducer } from "@/features/BlockPageMaterialSelector";
import { blockAndCoverFasteningMethodsListReducer } from "@/features/BlockAndCoverFasteningMethodSelector";
import { blockPagesFasteningMethodsListReducer } from "@/features/BlockPagesFasteningMethodSelector";

export const makeStore = () => {
  return configureStore({
    reducer: {
      blanksList: blanksListReducer,
      blankDetails: blankSliceReducer,
      securityLevelsList: securityLevelsListReducer,
      countriesList: countriesListReducer,
      manufacturersList: manufacturersListReducer,
      coverDesignsList: coverDesignsListReducer,
      coverColorsList: coverColorsListReducer,
      coverTexturesList: coverTexturesListReducer,
      coverImageMethodsList: coverImageMethodsListReducer,
      blockDesignsList: blockDesignsListReducer,
      blockCornersDesignsList: blockCornersDesignsListReducer,
      blockPagesMaterialsList: blockPagesMaterialsListReducer,
      blockAndCoverFasteningMethodsList:
        blockAndCoverFasteningMethodsListReducer,
      blockPagesFasteningMethodsList: blockPagesFasteningMethodsListReducer,
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
