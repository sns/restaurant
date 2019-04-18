import * as React from "react";

const styles = {
  body: {
    boxSizing: "border-box"
  } as React.CSSProperties
};
export class Home extends React.Component {
  public render() {
    return <div style={styles.body} />;
  }
}

export default Home;
