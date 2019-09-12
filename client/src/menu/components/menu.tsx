import * as React from "react";
import MenuItem from "@src/menu/models/menuItem";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardActions from "@material-ui/core/CardActions";
import CardActionArea from "@material-ui/core/CardActionArea";
import Typography from "@material-ui/core/Typography";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";

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
                <CardActionArea>
                    <CardHeader
                        title={item.name}
                        subheader={`$${item.price}`}
                    />
                    <CardContent>
                        {/* <Typography variant="h5" component="h2">
                            {`${item.name} $${item.price}`}
                        </Typography> */}
                        <Typography
                            variant="body2"
                            color="textSecondary"
                            component="p"
                        >
                            Famous Persian ground beef kabob with a hint of
                            onion flavor.
                        </Typography>
                    </CardContent>
                    <CardMedia
                        image="./images/kabob1.jpg"
                        title="kabob"
                        style={{ height: 200 }}
                    />
                    <CardActions>
                        <Button size="small" color="primary">
                            Add To Cart
                        </Button>
                    </CardActions>
                </CardActionArea>
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
