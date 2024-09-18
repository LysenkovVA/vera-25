import { Blank } from "./model/types/blank";
import { BlankSchema } from "./model/types/blank.schema";
import {
  blankSliceActions,
  blankSliceReducer,
} from "./model/slice/blank.slice";

import BlankForm from "./ui/BlankForm/BlankForm";
import BlankEditorDrawer from "./ui/BlankEditorDrawer/BlankEditorDrawer";
import BlankItem from "./ui/BlankItem/BlankItem";
import BlankView from "@/entities/Blank/ui/BlankView/BlankView";

export {
  BlankForm,
  BlankEditorDrawer,
  BlankItem,
  BlankView,
  blankSliceActions,
  blankSliceReducer,
};
export * from "./model/selectors/blank.selectors";
export * from "./model/services/deleteBlank.service";

export type { Blank, BlankSchema };
