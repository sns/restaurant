import ActionName from "@src/Menu/Actions/ActionName";
import menuService from "@src/Menu/Services/MenuService";
import { Dispatch, GetState } from "@Common/Store";
import { createThunkAction } from "@Common/Store/ActionCreator";

export const actions = {
  fetchMenuItems: createThunkAction(ActionName.FetchMenuItems, () => {
    return (dispatch: Dispatch, getState: GetState) => {
      return dispatch({
        type: ActionName.FetchMenuItems,
        payload: menuService.fetchMenuItems()
      });
    };
  })
};

export default actions;
