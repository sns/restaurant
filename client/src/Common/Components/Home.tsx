import * as React from "react";

// const styles = {
//   // parallax: {
//   //   backgroundImage: `url('${process.env.PUBLIC_URL}/Images/sofre1.jpg')`,
//   //   height: 500,
//   //   width: "100vw",
//   //   backgroundAttachment: "fixed",
//   //   backgroundPosition: "center",
//   //   backgroundRepeat: "no-repeat",
//   //   backgroundSize: "cover"
//   // } as React.CSSProperties,
//   // bodyContent: {
//   //   height: 400,
//   //   backgroundColor: "#f2f2f2",
//   //   fontSize: 36
//   // } as React.CSSProperties
// };
export class Home extends React.Component {
  public render() {
    return (
      <section>
        <div className="container">
          <div className="row center-xs center-sm center-md center-ls middle-xs middle-sm middle-md middle-lg">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
              <h1>Welcome to <span className="primary-text">House Of Kabob</span></h1>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Home;
