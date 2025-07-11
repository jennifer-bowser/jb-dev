import techImages from "../../../util/TechImages";
import horizontalLines from "@/assets/flourishes/vertical-lines.svg"
import ImageTile from "../../util-components/ImageTile/ImageTile.jsx";
import jointedDownArrow from "../../../assets/flourishes/jointed-down-arrow.svg";
import "./About.css";

export default function About() {

    return (
        <>
            <p className="About-Intro">
                Hey there! I&apos;m Jennifer – a senior full-stack software engineer. I originally graduated with a degree in Biology, but one Excel macro led to another
                and I soon discovered a love of programming! I have since obtained a B.S. in Software Development, and also recently finished a Masters of Science in
                Software Development at Boston University. I now combine my backgrounds in both software engineering and biology in my current role at Nationwide
                Children&apos;s Hospital in the Abigail Wexner Research Institute, where I build full-stack applications for genomic variant analysis. Let’s connect!
            </p>
            <img src={jointedDownArrow} id="About-JointedDownArrow"></img>
            <img src={horizontalLines} id="Horizontal-Lines-Flourish"></img>
            <section className="About-Stack">
                <h2>my stack<span className="Accent-Text">:</span></h2>
                <p>Here are a few technologies I&apos;m enjoying right now &darr;</p>
                <div className="Dropshadow-Box">
                    {Object.keys(techImages).map((imageName) => (
                        <ImageTile altText={imageName} imgSrc={techImages[imageName]} key={imageName} />
                    ))}
                    <p>There’s more where this came from — check out my resume for my full tech toolkit!</p>
                </div>
            </section>
        </>
    )
}