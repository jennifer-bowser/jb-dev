import images from "../../TechImages";
import ImageTile from "../util-components/ImageTile";
import jointedDownArrow from "../../assets/flourishes/jointed-down-arrow.svg";
import "./About.css";

export default function About() {

    return (
        <>
            <p className="About-Intro">
                Hey there! I&apos;m Jennifer - a full-stack software engineer based in Seattle, Washington.
                I graduated from Pepperdine University in 2017 with a degree in Biology; however,
                one Excel macro led to another and I soon discovered a love of programming! I have since
                obtained a B.S. in Software Development, and also recently finished a Masters of Science
                in Software Development at Boston University. I&apos;m  looking forward to working with you!
            </p>
            <img src={jointedDownArrow} id="About-JointedDownArrow"></img>
            <section className="About-Stack">
                <h2>my stack<span className="Accent-Text">:</span></h2>
                <p>Here are a few technologies I&apos;m enjoying right now</p>
                <div className="Dropshadow-Box">
                    {Object.keys(images).map( (key) => (
                        <ImageTile altText={key} imgSrc={images[key]} key={key} />
                    ))}
                </div>
            </section>
        </>
    )
}