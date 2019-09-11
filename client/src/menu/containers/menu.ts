import { connect } from "react-redux";
import { RootState } from "@src/common/store/rootReducer";
import Menu, { StateProps } from "@src/menu/components/menu";
import MenuActions from "@src/menu/actions/menu";

const mapStateToProps = (state: RootState): StateProps => ({
    items: state.menuItems,
});

const mapDispatchToProps = dispatch => ({
    loadMenuItems: () => {
        dispatch(MenuActions.fetchMenuItems());
    },
    createMenuItem: (name: string, price: number) => console.log(name),
    // dispatch(MenuActions.createMenuItem(name, price))
});
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Menu);
