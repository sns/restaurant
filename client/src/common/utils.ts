import * as typesafeActions from "typesafe-actions";
import { ActionType } from "redux-promise-middleware";

export const getType = typesafeActions.getType;

export function getPromiseType(t: any) {
  const type = typesafeActions.getType(t);
  return {
    pending: `${type}_${ActionType.Pending}`,
    fulfilled: `${type}_${ActionType.Fulfilled}`,
    rejected: `${type}_P${ActionType.Rejected}`
  };
}
