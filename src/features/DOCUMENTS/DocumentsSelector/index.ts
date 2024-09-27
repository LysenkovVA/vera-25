import { DocumentSelector } from "./ui/DocumentSelector";
import {
  documentsListSelectorActions,
  documentsListSelectorReducer,
} from "./model/slice/documentsListSelectorSlice";
import { DocumentsListSelectorSchema } from "./model/types/documentsListSelectorSchema";

export {
  DocumentSelector,
  documentsListSelectorReducer,
  documentsListSelectorActions,
};
export type { DocumentsListSelectorSchema };
export * from "./model/selectors/documentsListSelector.selectors";
