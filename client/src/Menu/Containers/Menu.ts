import Menu, { StateProps } from "@src/Menu/Components/Menu";
import { connect } from "react-redux";
import MenuActions from "@src/Menu/Actions/Menu";
import { RootState } from "@src/Common/Store/RootReducer";

const mapStateToProps = (state: RootState): StateProps => ({
  items: state.menuItems
});

const mapDispatchToProps = dispatch => ({
  loadMenuItems: () => {
    dispatch(MenuActions.fetchMenuItems());
  },
  createMenuItem: (name: string, price: number) => console.log(name)
  // dispatch(MenuActions.createMenuItem(name, price))
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Menu);
