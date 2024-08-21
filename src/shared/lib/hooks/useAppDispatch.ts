import { useDispatch } from "react-redux";
import { AppDispatch } from "@/shared/lib/Providers/StoreProvider/config/store";

export const useAppDispatch: () => AppDispatch = useDispatch;
