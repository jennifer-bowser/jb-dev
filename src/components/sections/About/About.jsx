import images from "../../../util/TechImages";
import ImageTile from "../../util-components/ImageTile/ImageTile.jsx";
import jointedDownArrow from "../../../assets/flourishes/jointed-down-arrow.svg";
import "./About.css";

export default function About() {

    return (
        <>
            <p className="About-Intro">
                Hey there! I'm Jennifer – a full-stack software engineer with a love for tackling tricky technical challenges.
                I originally graduated with a degree in Biology, but one Excel macro led to another and I soon discovered a love
                of programming! I have since obtained a B.S. in Software Development, and also recently finished a Masters of
                Science in Software Development at Boston University. In my current role, I build full-stack, interactive data
                visualizations for a large labor market analytics web application. I love learning new things and finding
                innovative ways to solve complex problems while improving user experiences. Let’s connect!
            </p>
            <img src={jointedDownArrow} id="About-JointedDownArrow"></img>
            <section className="About-Stack">
                <h2>my stack<span className="Accent-Text">:</span></h2>
                <p>Here are a few technologies I&apos;m enjoying right now &darr;</p>
                <div className="Dropshadow-Box">
                    {Object.keys(images).map((key) => (
                        <ImageTile altText={key} imgSrc={images[key]} key={key} />
                    ))}
                </div>
            </section>
        </>
    )
}