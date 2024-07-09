import "./Splashbox.css";
import Separator from "../Separator/Separator.jsx";
import TypingLetters from "../TypingLetters/TypingLetters";
import SplashboxBulletList from "../SplashboxBulletList/SplashboxBulletList.jsx";
import rectangleCircleOutline from "../../../../assets/flourishes/rectangle-circle-outline.svg";
import circleOutlineSolid from "../../../../assets/flourishes/circle-outline-solid.svg";

export default function Splashbox(){
    return (
        <section className="Splashbox" id="home">
            <img id="Splashbox-RectangleCircleOutline" className="Splashbox-Flourish" src={rectangleCircleOutline}/>
            <div className="Splashbox-Content-Wrapper">
                <TypingLetters text={"hi, i'm jennifer"}/>
                <div className="Splashbox-Row2">
                    <Separator />
                    <SplashboxBulletList />
                </div>
            </div>
            <img id="Splashbox-CircleOutlineSolid" className="Splashbox-Flourish" src={circleOutlineSolid}/>
        </section>
    )
}