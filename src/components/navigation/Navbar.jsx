import NavMenu from "./NavMenu"
import fullLogo from "../../assets/jb-dev-logos/jb-logo-full.svg";
import miniLogo from "../../assets/jb-dev-logos/jb-logo-mini.svg";
import { useState, useEffect } from "react";
import "./Navbar.css"

export default function Navbar({ sections }) {
    // used to switch to miniLogo if window gets too small
    const MIN_WIDTH = 750;
    const [useMiniLogo, setUseMiniLogo] = useState(window.innerWidth <= MIN_WIDTH);

    useEffect( () => {
        function handleResize() {
            if(window.innerWidth <= MIN_WIDTH && !useMiniLogo){
                setUseMiniLogo(true);
            }
            else if(window.innerWidth > MIN_WIDTH & useMiniLogo){
                setUseMiniLogo(false);
            }
        }

        window.addEventListener('resize', handleResize)

        return _ => {
            window.removeEventListener('resize', handleResize)
        }
    });

    return (
        <div className="Navbar">
            <img src={useMiniLogo ? miniLogo : fullLogo} className={useMiniLogo ? "MiniLogo" : "FullLogo"} height="40"/>
            <NavMenu sections={sections} />
        </div>
    )
}