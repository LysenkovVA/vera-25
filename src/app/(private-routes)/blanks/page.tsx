"use client";
import { BlanksList } from "@/features/BlanksList";
import {
  DynamicModuleLoader,
  ReducersList,
} from "@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import { blanksListReducer } from "@/features/BlanksList/model/slice/blanksList.slice";

const reducerList: ReducersList = {
  blanksList: blanksListReducer,
};

const BlanksPage = () => {
  return (
    <DynamicModuleLoader reducers={reducerList} removeAfterUnmount={false}>
      <BlanksList />
    </DynamicModuleLoader>
  );
};

export default BlanksPage;
