// eslint-disable-next-line no-restricted-imports
import { useDispatch, useSelector } from "react-redux";
import {
  AppDispatch,
  RootState,
} from "@/shared/lib/Providers/StoreProvider/config/store";

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector = useSelector.withTypes<RootState>();
