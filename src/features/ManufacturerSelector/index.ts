import { ManufacturerSelector } from "./ui/ManufacturerSelector";
import {
  manufacturersListActions,
  manufacturersListReducer,
} from "./model/slice/manufacturersListSlice";
import { ManufacturersListSchema } from "./model/types/manufacturersListSchema";

export {
  ManufacturerSelector,
  manufacturersListReducer,
  manufacturersListActions,
};
export type { ManufacturersListSchema };
export * from "./model/selectors/manufacturersList.selectors";
