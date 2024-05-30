import "./NavMenu.css";

export default function NavMenu(){
    return (
        <ul className="NavMenu">
            <li>
                <a href="#">home</a>
                <div className="NavMenu-Highlight Active"></div>
            </li>
            <li>
                <a href="#">portfolio</a>
                <div className="NavMenu-Highlight"></div>
            </li>
            <li>
                <a href="#">about</a>
                <div className="NavMenu-Highlight"></div>
            </li>
            <li>
                <a href="#">contact</a>
                <div className="NavMenu-Highlight"></div>
            </li>
            <li>
                <a href="#">resume</a>
                <div className="NavMenu-Highlight"></div>
            </li>
        </ul>
    );
}