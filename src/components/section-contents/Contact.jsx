import ImageLink from "../util-components/ImageLink";
import githubLogo from "../../assets/contact-link-logos/github-logo.png";
import linkedinLogo from "../../assets/contact-link-logos/linkedin-logo.svg";
import "./Contact.css";
import DecorativeBoxLink from "../util-components/DecorativeBoxLink";

export default function Contact(){
    return (
        <>
            <p className="Subtitle">Let's get in touch <span className="Accent-Text Bold">&darr;</span></p>
            <div className="Contact-Links">
                <DecorativeBoxLink link={
                    <ImageLink imgSrc={githubLogo} altText={"GitHub Profile Link"} url="https://github.com/jennifer-bowser"/>
                }/>
                <DecorativeBoxLink link={
                    <ImageLink imgSrc={linkedinLogo} altText={"LinkedIn Profile Link"} url="https://www.linkedin.com/in/jenniferdbowser"/>
                }/>
            </div>
        </>
    )
}