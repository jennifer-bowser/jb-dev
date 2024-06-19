import "./BackToTop.css";
import upArrowIcon from "../../assets/icons/up-arrow-icon.svg";

export default function BackToTop(){
    return (
        <a className="BackToTop" href="#home" aria-label="Back To Top">
            <img src={upArrowIcon} alt="Back To Top"></img>
        </a>
    );
}