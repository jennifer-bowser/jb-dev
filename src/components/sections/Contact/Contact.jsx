import "./Contact.css";
import ImageLink from "../../util-components/ImageLink/ImageLink.jsx";
import DecorativeBoxLink from "../../util-components/DecorativeBoxLink/DecorativeBoxLink.jsx";
import githubLogo from "../../../assets/contact-link-logos/github-logo.png";
import linkedinLogo from "../../../assets/contact-link-logos/linkedin-logo.svg";

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