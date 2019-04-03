import * as React from "react";
import MenuItem from "@src/Menu/Models/MenuItem";

export interface DispatchProps {
  loadMenuItems: () => void;
  createMenuItem: (name: string, price: number) => void;
}
export interface StateProps {
  items: MenuItem[];
}
type Props = DispatchProps & StateProps;
export class Menu extends React.Component<Props> {
  componentDidMount() {
    this.props.loadMenuItems();
  }

  createNewMenuItem = () => {
    this.props.createMenuItem("new one", 17);
  };

  renderMenuItem = (item: MenuItem) => {
    return <div key={item.menuItemKey}>{`${item.name} $${item.price}`}</div>;
  };
  render() {
    return (
      <div>
        {this.props.items.map(x => this.renderMenuItem(x))}
        <button onClick={this.createNewMenuItem} value="Create New Menu Item" />
      </div>
    );
  }
}

export default Menu;
