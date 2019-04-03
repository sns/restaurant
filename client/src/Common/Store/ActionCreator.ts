import {
  createAction as typesafeCreateAction,
  TypeGetter
} from "typesafe-actions";
import { ThunkAction } from "./index";

// Delegate to the typesafe-actions creator
export const createAction = typesafeCreateAction;

type AsyncAction<R> = (...params: any[]) => ThunkAction<R>;
export const createThunkAction = <R, A extends AsyncAction<R>>(
  type: string,
  asyncAction: A
): A & TypeGetter<string> => {
  return typesafeCreateAction(type, asyncAction as any);
};

const creators = {
  createAction,
  createThunkAction
};

export default creators;
