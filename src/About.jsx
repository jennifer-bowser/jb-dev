import "./About.css";

export default function About(){
    const langs = [
        "JavaScript",
        "Node.js",
        "React",
        "SQL",
        "Java",
        "PHP",
        "mongoDB",
        "Express",
        "HTML",
        "CSS"
    ];

    return (
        <>
            <p className="About-Intro">
                Hey there! I'm Jennifer - a full-stack software engineer based in Seattle, Washington.
                I graduated from Pepperdine University in 2017 with a degree in Biology; however, 
                one Excel macro led to another and I soon discovered a love of programming! I have since
                obtained a B.S. in Software Development, and also recently finished a Masters of Science
                in Software Development at Boston University. Looking forward to working with you!
            </p>
            <section className="About-Stack">
                <h2>my stack<span className="Accent-Text">:</span></h2>
                <p>Here are a few technologies I'm enjoying right now</p>
                <div className="Dropshadow-Box">
                    {langs}
                </div>
            </section>
        </>
    )
}