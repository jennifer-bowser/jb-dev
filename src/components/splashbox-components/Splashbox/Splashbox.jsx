import Separator from "../Separator/Separator";
import TypingLetters from "../TypingLetters";
import SplashboxBulletList from "../SplashboxBulletList/SplashboxBulletList";
import rectangleCircleOutline from "src/assets/flourishes/rectangle-circle-outline.svg";
import circleOutlineSolid from ".src/assets/flourishes/circle-outline-solid.svg";
import "./Splashbox.css";

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