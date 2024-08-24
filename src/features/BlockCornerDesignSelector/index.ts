import { BlockCornersDesignSelector } from "./ui/BlockCornersDesignSelector";
import {
  blockCornersDesignsListActions,
  blockCornersDesignsListReducer,
} from "./model/slice/blockCornersDesignsListSlice";
import { BlockCornersDesignsListSchema } from "./model/types/blockCornersDesignsListSchema";

export {
  BlockCornersDesignSelector,
  blockCornersDesignsListActions,
  blockCornersDesignsListReducer,
};
export type { BlockCornersDesignsListSchema };
export * from "./model/selectors/blockCornersDesignsList.selectors";
