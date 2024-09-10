import { ResearchMethod } from "./model/types/research-method";
import { ResearchMethodsListSchema } from "./model/types/researchMethodsListSchema";
import {
  researchMethodsListActions,
  researchMethodsListReducer,
} from "./model/slice/researchMethodsListSlice";

export { researchMethodsListActions, researchMethodsListReducer };
export * from "./model/selectors/researchMethodsList.selectors";

export type { ResearchMethod, ResearchMethodsListSchema };
