import { BlockPagesMaterialSelector } from "./ui/BlockPagesMaterialSelector";
import {
  blockPagesMaterialsListActions,
  blockPagesMaterialsListReducer,
} from "./model/slice/blockPagesMaterialsListSlice";
import { BlockPagesMaterialsListSchema } from "./model/types/blockPagesMaterialsListSchema";

export {
  BlockPagesMaterialSelector,
  blockPagesMaterialsListActions,
  blockPagesMaterialsListReducer,
};
export type { BlockPagesMaterialsListSchema };
export * from "./model/selectors/blockPagesMaterialsList.selectors";
