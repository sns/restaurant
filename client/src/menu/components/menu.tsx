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
            <Card
                key={item.menuItemKey}
                style={{ gridArea: `card-${item.menuItemKey}` }}
            >
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
        const templateArea = `'${this.props.items
            .map(x => `card-${x.menuItemKey}`)
            .join(" ")}'`;
        const cardGridStyle = {
            display: "grid",
            gridTemplateAreas: templateArea,
            gridTemplateColumns: `repeat(${this.props.items.length}, 1fr)`,
            gridTemplateRows: "auto",
            gridColumnGap: 20,
        } as React.CSSProperties;
        return (
            <div style={cardGridStyle}>
                {this.props.items.map(x => this.renderMenuItem(x))}
                <button
                    onClick={this.createNewMenuItem}
                    value="Create New Menu Item"
                />
            </div>
        );
    }
}

export default Menu;
