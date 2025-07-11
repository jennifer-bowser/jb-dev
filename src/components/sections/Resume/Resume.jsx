import "./Resume.css";
import BulletList from "../../util-components/BulletList/BulletList.jsx";
import sidewaysArrow from "@/assets/flourishes/sideways-arrow.svg";
import openNewTabIcon from "@/assets/icons/open-new-tab-icon.svg"
import resumePdf from "@/assets/Jennifer_Bowser_Resume.pdf";
import ResumeHeader from "./ResumeHeader/ResumeHeader.jsx";

export default function Resume() {
    const roles = {
        "Nationwide Children's Hospital, Abigail Wexner Research Institute": {
            "Senior Full-Stack Developer": {
                "dates": "January 2025 — Present",
                "responsibilities": [
                    "Develop and maintain dynamic, data-intensive web application user interfaces using React.js and Typescript.",
                    "Design and implement RESTful APIs in Python, leveraging relational (SQL) databases and AWS Lambda for scalable and efficient backend services.",
                    "Drive the design and optimization of systems’ information architecture, ensuring system efficiency and scalability.",
                    "Collaborate with researchers, clinical faculty, and interdisciplinary teams to develop software solutions that support medical research and patient care.",
                    "Mentor and support junior developers, providing guidance on best practices, code quality, and professional growth.",
                    "Apply best practices in software development, including version control (Git), peer code reviews, testing, and documentation"
                ],
                "keyAccomplishments": []
            }
        },
        "Lightcast": {
            "Full-Stack Software Engineer II": {
                "dates": "March 2023 — January 2025",
                "responsibilities": [],
                "keyAccomplishments": []
            },
            "Full-Stack Software Engineer I": {
                "dates": "May 2022 — March 2023",
                "responsibilities": [
                    "Design and build full-stack, interactive, reusable features for Lightcast’s flagship SaaS application using JavaScript (React, D3.js) and PHP.",
                    "Maintain and optimize labor analytics software by identifying and resolving bugs, implementing feature updates, and optimizing code performance, helping to create a seamless experience for over 30,000 enterprise customers.",
                    "Developed robust interfaces to consume and display data from RESTful APIs and relational SQL databases (MySQL, PostgreSQL), optimizing data retrieval and processing for enhanced performance.",
                    "Architect technical strategies to translate feature requests into scalable, robust, and easily-maintained solutions, enabling the development of hundreds of new and upgraded features.",
                    "Utilize GitLab for CI/CD pipelines to automate build, test, and deployment processes, ensuring rapid and efficient code integration and delivery.",
                    "Responsible for key aspects of Agile Scrum development processes using Jira and Confluence, including sprint planning and daily stand-ups"
                ],
                "keyAccomplishments": [
                    "Served as lead engineer on a cross-team project to integrate new data streams into a legacy product, enabling the development of new and innovative features, directly driving over $1.2M in sales within 6 months of the product refresh.",
                    "Drove the re-architecture of our application’s data consumption for fundamental data types, applying SOLID design principles and patterns to enhance system scalability and maintainability.",
                    "Spearheaded codebase modernization by upgrading our back-end language to the latest version, enhancing performance and maintainability while ensuring alignment with best practices."
                ]
            }
        }
    }

    const langsAndFrameworks = [
        "JavaScript",
        "TypeScript",
        "React",
        "Python",
        "SQL (MySQL & PostgreSQL)",
        "REST APIs",
        "MUI",
        "AWS Lambdas",
        "Java",
        "Node.js",
        "MongoDB",
        "PHP",
        "Kotlin",
        "Android SDK",
        "D3.js",
        "Express.js",
        "FXML",
        "XML",
        "HTML",
        "SASS",
        "CSS"
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
            <img src={sidewaysArrow} id="Resume-SidewaysArrow"></img>
            <a className="Resume-PDF-Link Subtitle" href={resumePdf} target="_blank" type="application/pdf" rel="alternate" media="print">view as pdf<img src={openNewTabIcon} width="11.2px" /></a>
            <div className="Dropshadow-Box" >
                <section>
                    <ResumeHeader headingText="Work Experience" />
                    {Object.entries(roles).map(([company, role]) => (
                        <section key={company}>
                            <h4>{company}</h4>
                            {Object.entries(role).map(([title, info]) => (
                                <section key={title} className="Resume-Role-Section">
                                    <h5>{title}</h5>
                                    <p className="Subtitle">{info.dates}</p>
                                    {info.responsibilities.length > 0 &&
                                        <>
                                            <h6>Responsibilities:</h6>
                                            <BulletList listItems={info.responsibilities} />
                                        </>
                                    }
                                    {info.keyAccomplishments.length > 0 &&
                                        <>
                                            <h6>Key Accomplishments:</h6>
                                            <BulletList listItems={info.keyAccomplishments} />
                                        </>
                                    }
                                </section>
                            ))}
                        </section>
                    ))}
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