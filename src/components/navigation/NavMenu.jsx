import "./NavMenu.css";

export default function NavMenu({sections}){
    return (
        <ul className="NavMenu">
            {sections.map( (section, index) => (
                <li key={index}>
                    <a href={`#${section}`} onClick={() => handleClick(section)}>{section}</a>
                    <div className="NavMenu-Underline"></div>
                </li>
            ))}
        </ul>
    );
}