import { CoverColorSelector } from "./ui/CoverColorSelector";
import {
  coverColorsListActions,
  coverColorsListReducer,
} from "./model/slice/coverColorsListSlice";
import { CoverColorsListSchema } from "./model/types/coverColorsListSchema";

export { CoverColorSelector, coverColorsListActions, coverColorsListReducer };
export type { CoverColorsListSchema };
export * from "./model/selectors/coverColorsList.selectors";
