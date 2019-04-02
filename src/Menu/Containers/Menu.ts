import Menu, { StateProps } from "@src/Menu/Components/Menu";
import { RootState } from "@src/Common/Reducers/RootReducer";
import { connect } from "react-redux";
import actions from "@src/Menu/Actions";

const mapStateToProps = (state: RootState): StateProps => ({
  items: state.menuItems
});

const mapDispatchToProps = dispatch => ({
  createMenuItem: (name: string, price: number) =>
    dispatch(actions.createMenuItem(name, price))
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Menu);
