import NavMenu from "./NavMenu"
import fullLogo from "../../assets/jb-dev-logos/jb-logo-full.svg";
import "./Navbar.css"

export default function Navbar({ sections }) {
    return (
        <div className="Navbar">
            <img src={fullLogo} height="40" className="Navbar-FullLogo"/>
            <div className="Navbar-Spacer"></div>
            <NavMenu sections={sections} />
        </div>
    )
}