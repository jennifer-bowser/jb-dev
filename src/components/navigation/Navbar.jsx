import NavMenu from "./NavMenu"
import fullLogo from "../../assets/jb-dev-logos/jb-logo-full.svg";
import miniLogo from "../../assets/jb-dev-logos/jb-logo-mini.svg";
import { useState, useEffect } from "react";
import "./Navbar.css"

export default function Navbar({ sections }) {
    // used to switch to miniLogo if window gets too small
    const[windowWidth, setWindowWidth] = useState(window.innerWidth);
    let useMiniLogo = windowWidth <= 850;

    useEffect( () => {
        function handleResize() {
            setWindowWidth(window.innerWidth);   
        }

        window.addEventListener('resize', handleResize)

        return _ => {
            window.removeEventListener('resize', handleResize)
        }
    });

    return (
        <div className="Navbar">
            <img src={useMiniLogo ? miniLogo : fullLogo} className={useMiniLogo ? "MiniLogo" : "FullLogo"} height="75"/>
            <NavMenu sections={sections} />
        </div>
    )
}