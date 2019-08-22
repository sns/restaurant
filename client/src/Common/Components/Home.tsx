import * as React from "react";

const styles = {
    showcaseStyle: {
        backgroundImage: "url(./images/hok.jpg)",
        height: "500px",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
        boxShadow: "inset 0 0 0 1000px rgba(0,0,0,0.3)",
    } as React.CSSProperties,
    showcaseStyle2: {
        backgroundImage: "url(./images/sofre1.jpg)",
        height: "300px",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
        boxShadow: "inset 0 0 0 1000px rgba(0,0,0,0.3)",
    } as React.CSSProperties,
    section1: {
        textAlign: "center",
        padding: 50,
        background: "rgba(255, 246, 242, 0.94)",
    } as React.CSSProperties,
    showcaseHeaderStyle: {
        height: 70,
    } as React.CSSProperties,
};
export class Home extends React.Component {
    public render() {
        return (
            <div>
                <div style={styles.showcaseStyle} />
                <div style={styles.section1}>
                    <h1 style={styles.showcaseHeaderStyle}>
                        Welcome to House Of Kabob
                    </h1>
                    <p className="primary-text">
                        Based on Ancient Persia’s thousands of year-old
                        recipies, House of Kabob offers an exquisite taste of
                        middle-eastern dining. Whether it’s our famous ground
                        beef Koobideh kabob, succulent lamb tenderloin kabob, or
                        the delicately spiced broiled salmon, our food will
                        definitely leave a satisfied palate. Whether it’s a
                        romantic night out or an office party, the House of
                        Kabob is perfect for every occasion. All of our
                        mouth-watering foods are available for catering,
                        carry-out, or fine in-restaurant dining.
                    </p>
                    <div className="primary-text">
                        City Papaer — Winner of The Best Middle Eastern
                        Restaurant Best of
                    </div>
                    <div className="primary-text">
                        Baltimore — Voted Best Kabob Baltimore Magazine — Best
                        Kabob of Baltimore
                    </div>
                </div>
                <div style={styles.showcaseStyle2} />
                <div style={styles.section1}>
                    <p className="primary-text">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Quae beatae voluptatibus obcaecati fuga aspernatur
                        dolore, quia, quibusdam et similique quaerat provident
                        cumque possimus veniam natus! Ipsa quibusdam reiciendis
                        pariatur fugiat similique, iste amet quis aut at odit
                        blanditiis cumque ipsum adipisci repellat praesentium
                        veritatis cum deleniti. Animi temporibus obcaecati et
                        dolor quia sapiente alias numquam repellendus a expedita
                        in nisi dolore, sit ad non placeat quos molestiae
                        reiciendis aliquam tempora? Soluta repudiandae dolorem
                        excepturi, qui amet eligendi rerum sint illum
                        consectetur quibusdam nostrum deserunt, nobis
                        distinctio. Quo repudiandae, sunt sint, modi temporibus
                        dicta esse maiores facilis voluptatibus facere, illum
                        cumque!
                    </p>
                </div>
            </div>
        );
    }
}

export default Home;
