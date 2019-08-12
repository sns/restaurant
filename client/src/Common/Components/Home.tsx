import * as React from "react";

interface Props {
    style?: React.CSSProperties
}
export class Home extends React.Component<Props> {
    public render() {
        return (
            <section style={this.props.style}>
                <div className="container">
                    <h1>Welcome to <span className="primary-text">House Of Kabob</span></h1>
                </div>
            </section>
        );
    }
}

export default Home;
