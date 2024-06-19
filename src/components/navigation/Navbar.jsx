import NavMenu from "./NavMenu"
import "./Navbar.css"

export default function Navbar({ sections }) {
    return (
        <div className="Navbar">
            <img src="src/assets/jb-dev-logos/jb-logo-full.svg" width="275px" />
            <NavMenu sections={sections} />
        </div>
    )
}