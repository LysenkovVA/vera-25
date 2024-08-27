import { DetailTypeSelector } from "./ui/DetailTypeSelector";
import {
  detailTypesListActions,
  detailTypesListReducer,
} from "./model/slice/detailTypesListSlice";
import { DetailTypesListSchema } from "./model/types/detailTypesListSchema";

export { DetailTypeSelector, detailTypesListActions, detailTypesListReducer };
export type { DetailTypesListSchema };
export * from "./model/selectors/detailTypesList.selectors";
