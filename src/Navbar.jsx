import NavMenu from "./NavMenu"
import "./Navbar.css"

export default function Navbar(){
    return (
        <div className="Navbar">
            <img src="src/assets/jb-logo-full.svg" width="250px"/>
            <NavMenu />
        </div>
    )
}