import Separator from "./Separator";
import TypingLetters from "./TypingLetters";
import SplashboxBulletList from "./SplashBoxBulletList";
import rectangleCircleOutline from "../assets/flourishes/rectangle-circle-outline.svg";
import circleOutlineSolid from "../assets/flourishes/circle-outline-solid.svg";
import "./Splashbox.css";

export default function Splashbox(){
    return (
        <section className="Splashbox" id="home">
            <img id="Splashbox-RectangleCircleOutline" src={rectangleCircleOutline}/>
            <div className="Splashbox-Content-Wrapper">
                <TypingLetters text={"hi, i'm jennifer"}/>
                <Separator />
                <SplashboxBulletList />
            </div>
            <img id="Splashbox-CircleOutlineSolid" src={circleOutlineSolid}/>
        </section>
    )
}