import ActionName from "@src/Menu/Actions/ActionName";

const menu = (state = [], action) => {
  switch (action.type) {
    case ActionName.CreateMenuItem:
      return [...state, action.payload];
    default:
      return state;
  }
};

export default menu;
