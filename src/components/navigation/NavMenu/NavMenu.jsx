import "./NavMenu.css";
import menuIcon from "../../../assets/icons/menuIcon.svg";
import { useEffect, useState, useRef } from "react";

export default function NavMenu({sections}){
    /*--  Toggle whether full menu vs menu button is visible --*/
    const MIN_WIDTH = 750;
    const [isNarrowWidth, setIsNarrowWidth] = useState(window.innerWidth <= MIN_WIDTH);

    useEffect( () => {
        function handleResize() {
            if(window.innerWidth <= MIN_WIDTH && !isNarrowWidth){
                setIsNarrowWidth(true);
                setShowNavMenu(false);
            }
            else if(window.innerWidth > MIN_WIDTH & isNarrowWidth){
                setIsNarrowWidth(false);
                setShowNavMenu(true);
            }
        }

        window.addEventListener('resize', handleResize)

        return _ => {
            window.removeEventListener('resize', handleResize)
        }
    });

    /*-- Handles showing/hiding the NavMenu vs menu button --*/
    const [showNavMenu, setShowNavMenu] = useState(!isNarrowWidth);
    const menuRef = useRef(null);

    const handleMenuButtonClick = () => {
        setShowNavMenu(true);
    }

    useEffect( () => {
        const handleClickOutside = (event) => {
            const menuButton = menuRef.current;
        
            if (isNarrowWidth && !menuButton.contains(event.target)) {
                setShowNavMenu(false);
            }
        }

        document.addEventListener('click', handleClickOutside, true);

        return _ => {
            document.removeEventListener('click', handleClickOutside, true);
        }
    });
    
    return (
        <>
            <img src={menuIcon} className={"MenuIcon " + (isNarrowWidth ? "Visible" : "Invisible")} onClick={handleMenuButtonClick} ref={menuRef} width="40"/>
            <ul className={"NavMenu" + (isNarrowWidth ? " Popout Dropshadow-Box" : " Full") + (showNavMenu ? " Visible" : " Invisible")}>
                {sections.map( (section, index) => (
                    <li key={index}>
                        <a href={`#${section}`}>{section}</a>
                        <div className="NavMenu-Underline"></div>
                    </li>
                ))}
            </ul>
        </>
    );
}