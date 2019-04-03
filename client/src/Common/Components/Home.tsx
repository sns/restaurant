import * as React from "react";

const styles = {
  body: {
    marginTop: 100,
  } as React.CSSProperties,
  parallax: {
    backgroundImage: `url('${process.env.PUBLIC_URL}/images/sofre1.jpg')`,
    height: 500,
    width: "100%",
    backgroundAttachment: "fixed",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "conver"
  } as React.CSSProperties,
  bodyContent: {
    height: 500,
    backgroundColor: "#f2f2f2",
    fontSize: 36
  } as React.CSSProperties
};
export class Home extends React.Component {
  public render() {
    return (
      <div style={styles.body}>
        <div style={styles.parallax} />

        <div style={styles.bodyContent}>
          Scroll Up and Down this page to see the parallax scrolling effect.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eget velit rhoncus elit fringilla ultrices vel fringilla arcu. Nunc gravida eros eu volutpat egestas. In hac habitasse platea dictumst. Proin eget sodales urna. Praesent posuere lectus eu libero blandit, a venenatis ipsum facilisis. Pellentesque nec vehicula libero, ac sollicitudin urna. Fusce ultricies molestie velit.
        </div>
        <div style={styles.parallax} />
      </div>
    );
  }
}

export default Home;
