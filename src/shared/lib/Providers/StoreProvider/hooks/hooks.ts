// eslint-disable-next-line no-restricted-imports
import { useDispatch, useSelector, useStore } from "react-redux";
import type { AppDispatch, AppStore, RootState } from "../config/store";
import { createSelector } from "@reduxjs/toolkit";

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = useDispatch.withTypes<AppDispatch>;
export const useAppSelector = useSelector.withTypes<RootState>;
export const useAppStore = useStore.withTypes<AppStore>;
export const createAppSelector = createSelector.withTypes<RootState>();
