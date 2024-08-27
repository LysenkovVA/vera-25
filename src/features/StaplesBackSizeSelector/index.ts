import { StaplesBackSizeSelector } from "./ui/StaplesBackSizeSelector";
import {
  staplesBackSizesListActions,
  staplesBackSizesListReducer,
} from "./model/slice/staplesBackSizesListSlice";
import { StaplesBackSizesListSchema } from "./model/types/staplesBackSizesListSchema";

export {
  StaplesBackSizeSelector,
  staplesBackSizesListActions,
  staplesBackSizesListReducer,
};
export type { StaplesBackSizesListSchema };
export * from "./model/selectors/staplesBackSizesList.selectors";
