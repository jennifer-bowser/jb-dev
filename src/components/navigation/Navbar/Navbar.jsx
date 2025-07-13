import NavMenu from "../NavMenu/NavMenu.jsx"
import fullLogo from "../../../assets/jb-dev-logos/jb-logo-full.svg";
import "./Navbar.css"

export default function Navbar({ sections }) {


    return (
        <div className="Navbar">
            {/* <div className="Name-Logo"> Jennifer Bowser</div> */}
            <img src={fullLogo} className="Navbar-FullLogo"></img>
            <NavMenu sections={sections} />
        </div >
    )
}