import "./Resume.css";

export default function Resume(){
    return(
        <>
            <a className="Resume-PDF-Link Subtitle">view as pdf</a>
            <div className="Dropshadow-Box" >
                <section>
                    <h3>Work Experience</h3>
                    <h4>Full-Stack Software Engineer II - Lightcast</h4>
                    <p className="Subtitle">Moscow, ID | May 2022 - Present</p>
                    <ul>
                        <li>
                            Develop and mantain full-stack features for data visualization web app using PHP and Javascript/React
                            to provide insights needed to build and develop education institutions, companies, and communities.
                        </li>
                        <li>
                            Collaborate with cross-functional team members to design new features and to incorporate new data streams
                            into existing tools.
                        </li>
                        <li>
                            Communicate with Product Managers to identify minimum viable product requirements and clearly defined feature sets.
                        </li>
                        <li>
                            Conduct regular code reviews and offer constructive feedback to maintain best-practice standards throughout
                            the codebase.
                        </li>
                        <li>
                            Engage in Agile development processes, including sprint planning, daily stand-up, and retrospectives.
                        </li>
                    </ul>
                </section>
                <section>
                    <h3>Education</h3>
                    <section>
                        <h4>M.S. Software Development - Boston University</h4>
                        <p className="Subtitle">Seattle, WA | January 2024</p>
                    </section>
                    <section>
                        <h4>B.S. Software Development -  Western Governors University</h4>
                        <p className="Subtitle">Seattle, WA | April 2022</p>
                    </section>
                    <section>
                        <h4>B.A. Biology - Pepperdine University</h4>
                        <p className="Subtitle">Malibu, CA | May 2017</p>
                    </section>
                </section>
                <section>
                    <h3>Skills</h3>
                    <ul>
                        <li><span>Technologies:</span>JavaScript, Node.js, PHP, SQL, MongoDB, Python, D3.js, React, APIs, Express,js, FXML, XML, HTML, CSS</li>
                        <li><span>Tools:</span>Git, GitHub, GitLab, Jira, Adobe Photoshop, Adobe Illustrator, Figma, Invision</li>
                    </ul>
                </section>
                <section>
                    <h3>Certifications</h3>
                    <ul>
                        <li>CompTIA A+ Certification</li>
                        <li>CompTIA Project+ Certification</li>
                        <li>Google IT Certification</li>
                    </ul>
                </section>
            </div>
        </>
    )
}