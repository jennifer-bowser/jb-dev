import NavMenu from "./NavMenu"
import "./Navbar.css"

export default function Navbar({ sections }) {
    return (
        <div className="Navbar">
            <a href="#home" className="Navbar-Logolink"><img src="src/assets/jb-dev-logos/jb-logo-full.svg" width="275px" /></a>
            <NavMenu sections={sections} />
        </div>
    )
}