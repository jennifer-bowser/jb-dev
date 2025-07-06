import NavMenu from "../NavMenu/NavMenu.jsx"
import fullLogo from "../../../assets/jb-dev-logos/jb-logo-full.svg";
import "./Navbar.css"

export default function Navbar({ sections }) {


    return (
        <div className="Navbar">
            {/* <img src={fullLogo} height="40" className="Navbar-FullLogo"/> */}
            <div style={{ fontWeight: 600, fontSize: "35pt" }}>jennifer bowser</div>
            <NavMenu sections={sections} />
        </div>
    )
}