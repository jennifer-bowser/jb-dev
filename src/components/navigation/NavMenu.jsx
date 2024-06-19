import "./NavMenu.css";
import { useState } from "react";

export default function NavMenu({sections}){
    const [activeSection, setActiveSection] = useState(sections[0]);

    const isActive = (section) => activeSection === section;

    const handleClick = (section) => {
        setActiveSection(section);
    }

    return (
        <ul className="NavMenu">
            {sections.map( (section, index) => (
                <li key={index}>
                    <a href={`#${section}`} onClick={() => handleClick(section)}>{section}</a>
                    <div className={`NavMenu-Underline${isActive(section) ? " NavMenu-Underline-Active" : ""}`}></div>
                </li>
            ))}
        </ul>
    );
}