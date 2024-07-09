import "./BackToTop.css";
import upArrowIcon from "../../../assets/icons/up-arrow-icon.svg";
import { useEffect, useState } from "react";

export default function BackToTop(){
    // used to hide BackToTop button when user is already at the top of the site
    const SCROLL_HEIGHT = 300;
    const [showButton, setShowButton] = useState(window.scrollY >= SCROLL_HEIGHT);

    useEffect( () => {
        function handleScroll() {
            if(window.scrollY >= SCROLL_HEIGHT && !showButton){
                setShowButton(true);
            }
            else if(window.scrollY < SCROLL_HEIGHT && showButton){
                setShowButton(false);
            }
        }

        window.addEventListener('scroll', handleScroll)

        return _ => {
            window.removeEventListener('scroll', handleScroll)
        }
    });

    return (
        <a className={"BackToTop" + (showButton ? " BackToTop-Visible" : " BackToTop-Invisible")} href="#home" aria-label="Back To Top">
            <img src={upArrowIcon} alt="Back To Top"></img>
        </a>
    );
}