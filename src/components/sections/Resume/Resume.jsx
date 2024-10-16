import "./Resume.css";
import BulletList from "../../util-components/BulletList/BulletList.jsx";
import sidwaysArrow from "../../../assets/flourishes/sideways-arrow.svg";
import openNewTabIcon from "../../../assets/icons/open-new-tab-icon.svg"
import ResumeHeader from "../../util-components/ResumeHeader/ResumeHeader.jsx";

export default function Resume() {
    const responsabilities = [
        "Design and build full-stack, interactive, reusable features for Lightcast’s flagship SaaS application using JavaScript (React, D3.js) and PHP.",
        "Maintain and optimize labor analytics software by identifying and resolving bugs, implementing feature updates, and optimizing code performance, helping to create a seamless experience for over 30,000 enterprise customers.",
        "Developed robust interfaces to consume and display data from RESTful APIs and relational SQL databases (MySQL, PostgreSQL), optimizing data retrieval and processing for enhanced performance.",
        "Architect technical strategies to translate feature requests into scalable, robust, and easily-maintained solutions, enabling the development of hundreds of new and upgraded features.",
        "Utilize GitLab for CI/CD pipelines to automate build, test, and deployment processes, ensuring rapid and efficient code integration and delivery.",
        "Responsible for key aspects of Agile Scrum development processes using Jira and Confluence, including sprint planning and daily stand-ups"
    ];

    const accomplishments = [
        "Served as lead engineer on a cross-team project to integrate new data streams into a legacy product, enabling the development of new and innovative features, directly driving over $1.2M in sales within 6 months of the product refresh.",
        "Drove the re-architecture of our application’s data consumption for fundamental data types, applying SOLID design principles and patterns to enhance system scalability and maintainability.",
        "Spearheaded codebase modernization by upgrading our back-end language to the latest version, enhancing performance and maintainability while ensuring alignment with best practices."
    ]

    const langsAndFrameworks = [
        "JavaScript",
        "React",
        "Java",
        "Python",
        "Node.js",
        "SQL (MySQL & PostgreSQL)",
        "MongoDB",
        "REST APIs",
        "PHP",
        "Kotlin",
        "Android SDK",
        "D3.js",
        "Express.js",
        "FXML",
        "XML",
        "HTML",
        "SASS/CSS"
    ]

    const toolsAndTech = [
        "Git",
        "GitHub",
        "GitLab",
        "Jira",
        "Confluence",
        "IntelliJ",
        "Visual Studio Code",
        "Visual Studio",
        "Android Studio",
        "Figma",
        "InVision",
        "Adobe Photoshop",
        "Adobe Illustrator"
    ]

    const certListItems = [
        "AWS Certified Cloud Practitioner",
        "CompTIA A+ Certification",
        "CompTIA Project+ Certification",
        "Google IT Certification"
    ]

    return (
        <>
            <img src={sidwaysArrow} id="Resume-SidewaysArrow"></img>
            <a className="Resume-PDF-Link Subtitle" href="src/assets/Jennifer_Bowser_Resume.pdf" target="_blank" type="application/pdf" rel="alternate" media="print">view as pdf<img src={openNewTabIcon} width="11.2px" /></a>
            <div className="Dropshadow-Box" >
                <section>
                    <ResumeHeader headingText="Work Experience" />
                    <section>
                        <h4>Full-Stack Software Engineer II&nbsp;&nbsp;—&nbsp;&nbsp;Lightcast</h4>
                        <p className="Subtitle">March 2023 — Present</p>
                    </section>
                    <section>
                        <h4>Full-Stack Software Engineer I&nbsp;&nbsp;—&nbsp;&nbsp;Lightcast</h4>
                        <p className="Subtitle">May 2022 — March 2023</p>
                    </section>
                    <section>
                        <h5>Responsabilities:</h5>
                        <BulletList listItems={responsabilities} />
                    </section>
                    <section>
                        <h5>Key Accomplishments:</h5>
                        <BulletList listItems={accomplishments} />
                    </section>
                </section>
                <section>
                    <ResumeHeader headingText="Education" />
                    <section>
                        <h4>M.S. Software Development&nbsp;&nbsp;—&nbsp;&nbsp;Boston University</h4>
                        <p className="Subtitle">January 2024</p>
                    </section>
                    <section>
                        <h4>B.S. Software Development&nbsp;&nbsp;—&nbsp;&nbsp; Western Governors University</h4>
                        <p className="Subtitle">April 2022</p>
                    </section>
                </section>
                <section className="Resume-Skills-Section">
                    <ResumeHeader headingText="Skills" />
                    <div className="Resume-Skills-List-Wrapper">
                        <section>
                            <h4>Languages & Frameworks</h4>
                            <BulletList listItems={langsAndFrameworks} />
                        </section>
                        <section>
                            <h4>Tools & Technologies</h4>
                            <BulletList listItems={toolsAndTech} />
                        </section>
                    </div>
                </section>
                <section>
                    <ResumeHeader headingText="Certifications" />
                    <BulletList listItems={certListItems} />
                </section>
            </div>
        </>
    )
}