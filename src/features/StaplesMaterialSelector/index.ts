import { StaplesMaterialSelector } from "./ui/StaplesMaterialSelector";
import {
  staplesMaterialsListActions,
  staplesMaterialsListReducer,
} from "./model/slice/staplesMaterialsListSlice";
import { StaplesMaterialsListSchema } from "./model/types/staplesMaterialsListSchema";

export {
  StaplesMaterialSelector,
  staplesMaterialsListActions,
  staplesMaterialsListReducer,
};
export type { StaplesMaterialsListSchema };
export * from "./model/selectors/staplesMaterialsList.selectors";
