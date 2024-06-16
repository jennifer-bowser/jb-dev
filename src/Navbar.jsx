import NavMenu from "./NavMenu"
import "./Navbar.css"

export default function Navbar({ sectionTitles }) {
    return (
        <div className="Navbar">
            <a href="#home" className="Navbar-Logolink"><img src="src/assets/jb-dev-logos/jb-logo-full.svg" width="275px" /></a>
            <NavMenu sectionTitles={sectionTitles} />
        </div>
    )
}