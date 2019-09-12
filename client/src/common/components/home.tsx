import * as React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const styles = {
    showcaseStyle: {
        backgroundImage: "url(./images/sofre1.jpg)",
        height: "650px",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
        boxShadow: "inset 0 0 0 1000px rgba(0,0,0,0.3)",
    } as React.CSSProperties,
    showcaseStyle2: {
        backgroundImage: "url(./images/sofre1.jpg)",
        height: "550px",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
        boxShadow: "inset 0 0 0 1000px rgba(0,0,0,0.3)",
    } as React.CSSProperties,
    section1: {
        padding: 50,
        background: "rgba(255, 246, 242, 0.94)",
    } as React.CSSProperties,
    intro: {
        gridArea: "intro",
    } as React.CSSProperties,
    section2: {
        textAlign: "center",
        padding: 50,
        background: "rgba(255, 246, 242, 0.94)",
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
        gridGap: 30,
    } as React.CSSProperties,
    showcaseHeaderStyle: {
        gridArea: "header",
        alignSelf: "center",
    } as React.CSSProperties,
    awards: {
        fontSize: "17px",
        lineHeight: "1.5",
        fontStyle: "italic",
        textAlign: "center",
        paddingTop: 20,
    } as React.CSSProperties,
    primaryTextPragrph: {
        fontSize: "17px",
        lineHeight: "1.5",
    } as React.CSSProperties,
};
export class Home extends React.Component {
    public render() {
        return (
            <div>
                <div style={styles.showcaseStyle} />
                <div style={styles.section1}>
                    <Card>
                        <CardContent style={styles.intro}>
                            <Typography style={styles.primaryTextPragrph}>
                                Based on Ancient Persia’s thousands of year-old
                                recipies, House of Kabob offers an exquisite
                                taste of middle-eastern dining. Whether it’s our
                                famous ground beef Koobideh kabob, succulent
                                lamb tenderloin kabob, or the delicately spiced
                                broiled salmon, our food will definitely leave a
                                satisfied palate. Whether it’s a romantic night
                                out or an office party, the House of Kabob is
                                perfect for every occasion. All of our
                                mouth-watering foods are available for catering,
                                carry-out, or fine in-restaurant dining.
                            </Typography>
                            <Typography style={styles.awards}>
                                City Papaer — Winner of The Best Middle Eastern
                                Restaurant Best of
                            </Typography>
                            <Typography style={styles.awards}>
                                Baltimore — Voted Best Kabob Baltimore Magazine
                                — Best Kabob of Baltimore
                            </Typography>
                        </CardContent>
                    </Card>
                </div>
                <div style={styles.showcaseStyle2} />
                <div style={styles.section2}>
                    <Card>
                        <CardContent>
                            <Typography style={styles.primaryTextPragrph}>
                                Having a party and can’t come to the House of
                                Kabob for dining in, yet still want our
                                scrumptious food? No problem! We offer all of
                                our food on the menu for catering. The finest,
                                freshest Persian food made with special care
                                that you would expect to have here can be had at
                                your own home. Quality first, as with everything
                                we do, can be guaranteed with our exceptional
                                catering services. Delivery and/or chafing
                                dishes are available upon request for an
                                additional surcharge. Whether it is 20 orders or
                                200, or even more, it is no problem!
                            </Typography>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardContent>
                            <Typography style={styles.primaryTextPragrph}>
                                Haven’t tried Persian cuisine before and don’t
                                know what to order? No problem! Come to our
                                buffet where we offer a wide variety of some of
                                our best dishes. Everything is made fresh daily:
                                soup, salads, kabobs, stews, our homemade
                                Persian flat bread, and more. Our buffet is
                                available Tuesday through Thursday from 11:30 am
                                to 3:30 pm, and all day Fridays, Saturdays, and
                                Sundays. Come to House of Kabob for the best in
                                Persian dining!
                            </Typography>
                        </CardContent>
                    </Card>
                </div>
            </div>
        );
    }
}

export default Home;
