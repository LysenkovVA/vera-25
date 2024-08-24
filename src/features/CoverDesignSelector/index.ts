import { CoverDesignSelector } from "./ui/CoverDesignSelector";
import {
  coverDesignsListActions,
  coverDesignsListReducer,
} from "./model/slice/coverDesignsListSlice";
import { CoverDesignsListSchema } from "./model/types/coverDesignsListSchema";

export {
  CoverDesignSelector,
  coverDesignsListActions,
  coverDesignsListReducer,
};
export type { CoverDesignsListSchema };
export * from "./model/selectors/countriesList.selectors";
