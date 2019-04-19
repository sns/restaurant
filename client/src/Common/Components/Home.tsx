import * as React from "react";

const styles = {
  body: {
    height: "100vh",
    scrollBehavior: "smooth"
  } as React.CSSProperties,
  parallax: {
    backgroundImage: `url('${process.env.PUBLIC_URL}/images/lambshanks1.jpg')`,
    height: "600px",
    width: "100%",
    backgroundAttachment: "fixed",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover"
  } as React.CSSProperties,
  parallax1: {
    backgroundImage: `url('${process.env.PUBLIC_URL}/images/kabob1.jpg')`,
    height: "300px",
    width: "100%",
    backgroundAttachment: "fixed",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover"
  } as React.CSSProperties,
  bodyContent: {
    fontSize: 36
  } as React.CSSProperties
};
export class Home extends React.Component {
  public render() {
    return (
      <div style={styles.body}>
        <div style={styles.parallax} />

        <div style={styles.bodyContent}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium
          dolore doloribus beatae dolores! Nesciunt repudiandae veritatis culpa
          ullam ea deserunt harum rerum molestiae beatae non, et minus sit
          provident odit iusto cumque, praesentium nihil corporis? Mollitia
          dolores dolorum error eaque laborum quod facere corrupti sed nemo
          impedit necessitatibus consequatur veritatis cum illo velit id minima,
          labore asperiores ullam animi. Itaque labore quasi, rem deserunt natus
          asperiores quibusdam praesentium maxime beatae eum et? Temporibus ea
          explicabo architecto quia voluptates autem rerum consequatur maxime
          necessitatibus officia incidunt perferendis soluta, sit odit doloribus
          cum. Quod soluta beatae sunt, ipsum iusto quaerat optio aspernatur!
        </div>
        <div style={styles.parallax1} />
        <div style={styles.bodyContent}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia
          quia ullam alias. Perferendis nemo quibusdam sequi debitis laudantium
          provident incidunt ipsum tempora reprehenderit nobis eum, officia
          mollitia illo voluptates atque exercitationem quod vero at soluta
          eligendi. Suscipit illo tenetur esse animi dolores sunt repudiandae
          rem quis quos reiciendis recusandae amet nihil fugiat, nostrum saepe
          nesciunt earum maiores a veritatis neque!
        </div>
        <div style={styles.parallax} />
      </div>
    );
  }
}

export default Home;
