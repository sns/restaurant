import * as React from "react";
import MenuItem from "@src/menu/models/menuItem";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";

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
        return (
            <Card key={item.menuItemKey}>
                <CardHeader title={item.name} subheader={`$${item.price}`} />
                <CardMedia
                    image="./images/kabob1.jpg"
                    title="kabob"
                    style={{ height: 200 }}
                />
            </Card>
        );
    };

    render() {
        const cardGridStyle = {
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gridGap: 30,
            padding: 50,
        } as React.CSSProperties;
        return (
            <div style={cardGridStyle}>
                {this.props.items.map(x => this.renderMenuItem(x))}
                {/* <button
                    onClick={this.createNewMenuItem}
                    value="Create New Menu Item"
                /> */}
            </div>
        );
    }
}

export default Menu;
