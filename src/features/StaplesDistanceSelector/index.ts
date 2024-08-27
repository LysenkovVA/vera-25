import { StaplesDistanceSelector } from "./ui/StaplesDistanceSelector";
import {
  staplesDistancesListActions,
  staplesDistancesListReducer,
} from "./model/slice/staplesDistancesListSlice";
import { StaplesDistancesListSchema } from "./model/types/staplesDistancesListSchema";

export {
  StaplesDistanceSelector,
  staplesDistancesListActions,
  staplesDistancesListReducer,
};
export type { StaplesDistancesListSchema };
export * from "./model/selectors/staplesDistancesList.selectors";
