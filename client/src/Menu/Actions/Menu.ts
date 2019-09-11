import ActionName from "@src/menu/actions/actionName";
import menuService from "@src/menu/services/menuService";
import { Dispatch, GetState } from "@common/store";
import { createThunkAction } from "@common/store/actionCreator";

export const actions = {
    fetchMenuItems: createThunkAction(ActionName.FetchMenuItems, () => {
        return (dispatch: Dispatch, getState: GetState) => {
            return dispatch({
                type: ActionName.FetchMenuItems,
                payload: menuService.fetchMenuItems(),
            });
        };
    }),
};

export default actions;
