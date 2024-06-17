import BulletList from "../util-components/BulletList";
import sidwaysArrow from "../../assets/flourishes/sideways-arrow.svg";
import "./Resume.css";

export default function Resume() {
    const workExperienceListItems = [
        "Develop and mantain full-stack features for data visualization web app using PHP and Javascript/React to provide insights needed to build and develop education institutions, companies, and communities.",
        "Collaborate with cross-functional team members to design new features and to incorporate new data streams into existing tools.",
        "Communicate with Product Managers to identify minimum viable product requirements and clearly defined feature sets.",
        "Conduct regular code reviews and offer constructive feedback to maintain best-practice standards throughout the codebase.",
        "Engage in Agile development processes, including sprint planning, daily stand-up, and retrospectives."
    ];

    const skillsListItems = [
        <><span className="Bold">Technologies: </span>JavaScript, Node.js, PHP, Java, Python, SQL, MongoDB, D3.js, React, APIs, Express,js, FXML, XML, HTML, CSS</>,
        <><span className="Bold">Tools: </span>Git, GitHub, GitLab, Jira, Adobe Photoshop, Adobe Illustrator, Figma, Invision</>
    ];

    const certListItems = [
        "CompTIA A+ Certification",
        "CompTIA Project+ Certification",
        "Google IT Certification"
    ]

    return (
        <>
            <img src={sidwaysArrow} id="Resume-SidewaysArrow"></img>
            <a className="Resume-PDF-Link Subtitle" href="src\assets\Jennifer-Bowser-Resume.pdf" target="_blank">view as pdf<img src="src\assets\open-new-tab-icon.svg" width="12px" /></a>
            <div className="Dropshadow-Box" >
                <section>
                    <div className="Resume-Heading-Block">
                        <div>
                            <h3>Work Experience</h3>
                            <div className="Block-Underline"></div>
                        </div>
                        <div className="Resume-Heading-Block-Expander"></div>
                    </div>
                    <h4>Full-Stack Software Engineer II&nbsp;&nbsp;—&nbsp;&nbsp;Lightcast</h4>
                    <p className="Subtitle">Moscow, ID | March 2023 — Present</p>
                    <BulletList listItems={workExperienceListItems} />
                    <div>
                        <h4>Full-Stack Software Engineer I&nbsp;&nbsp;—&nbsp;&nbsp;Lightcast</h4>
                        <p className="Subtitle">Moscow, ID | May 2022 — March 2023</p>
                    </div>
                </section>
                <section>
                    <div className="Resume-Heading-Block">
                        <div>
                            <h3>Education</h3>
                            <div className="Block-Underline"></div>
                        </div>
                        <div className="Resume-Heading-Block-Expander"></div>
                    </div>
                    <section>
                        <h4>M.S. Software Development&nbsp;&nbsp;—&nbsp;&nbsp;Boston University</h4>
                        <p className="Subtitle">Seattle, WA | January 2024</p>
                    </section>
                    <section>
                        <h4>B.S. Software Development&nbsp;&nbsp;—&nbsp;&nbsp; Western Governors University</h4>
                        <p className="Subtitle">Seattle, WA | April 2022</p>
                    </section>
                    <section>
                        <h4>B.A. Biology&nbsp;&nbsp;—&nbsp;&nbsp;Pepperdine University</h4>
                        <p className="Subtitle">Malibu, CA | May 2017</p>
                    </section>
                </section>
                <section className="Resume-Skills-Section">
                    <div className="Resume-Heading-Block">
                        <div>
                            <h3>Skills</h3>
                            <div className="Block-Underline"></div>
                        </div>
                        <div className="Resume-Heading-Block-Expander"></div>
                    </div>
                    <BulletList listItems={skillsListItems} />
                </section>
                <section>
                    <div className="Resume-Heading-Block">
                        <div>
                            <h3>Certifications</h3>
                            <div className="Block-Underline"></div>
                        </div>
                        <div className="Resume-Heading-Block-Expander"></div>
                    </div>
                    <BulletList listItems={certListItems} />
                </section>
            </div>
        </>
    )
}