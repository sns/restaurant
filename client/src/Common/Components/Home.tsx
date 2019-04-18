import * as React from "react";

const styles = {
  body: {
    marginTop: 100
  } as React.CSSProperties,
  parallax: {
    backgroundImage: `url('${process.env.PUBLIC_URL}/images/sofre1.jpg')`,
    height: 600,
    width: "100%",
    backgroundAttachment: "fixed",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover"
  } as React.CSSProperties,
  bodyContent: {
    height: 550,
    fontSize: 36
  } as React.CSSProperties
};
export class Home extends React.Component {
  public render() {
    return (
      <div style={styles.body}>
        <div style={styles.parallax} />

        <div style={styles.bodyContent}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro,
          nesciunt cum nemo natus a impedit quis quae ex eum atque totam ad
          dolore, eos autem omnis dignissimos voluptatem hic itaque tempore
          ullam? Voluptatibus veritatis odio eos rem mollitia illo quo expedita
          porro aspernatur distinctio debitis, adipisci quia sapiente possimus
          soluta enim id voluptas exercitationem amet iusto! Eius, distinctio
          vel! Debitis distinctio, ipsam neque laudantium omnis praesentium
          facilis voluptas, doloribus saepe quis reiciendis animi sapiente cum
          nemo ut, eius eveniet maxime expedita deleniti nobis numquam! Beatae,
          consequatur corporis nulla a ipsum cupiditate non ad veniam earum
          omnis doloribus laboriosam placeat incidunt nesciunt, perferendis
          animi fugit mollitia voluptas. Molestias, molestiae harum! Assumenda
          commodi error inventore obcaecati, recusandae repellendus voluptatem
          earum itaque vitae praesentium quidem tempore ad eligendi minima quos
          molestiae totam aperiam accusantium est quod quo officia. Minima enim,
          maiores nemo beatae unde dolores, ea molestias repellendus eum impedit
          iure quisquam esse. Reprehenderit omnis quas sapiente, iste commodi
          magni eaque consequuntur incidunt, unde impedit natus dolorum dolore
          quaerat, dolor obcaecati. Quasi iusto corrupti sunt, adipisci
          molestias iste dicta. Eius expedita ea magni est quibusdam. Numquam,
          non sequi aperiam ipsum, saepe, quibusdam atque quidem possimus
          recusandae fugiat obcaecati eveniet itaque neque natus dolorem!
          Inventore, repudiandae.
        </div>
        <div style={styles.parallax} />
      </div>
    );
  }
}

export default Home;
