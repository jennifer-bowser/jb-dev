import Separator from "./Separator";
import TypingLetters from "./TypingLetters";
import SplashboxBulletList from "./SplashBoxBulletList";
import "./Splashbox.css";

export default function Splashbox(){
    return (
        <section className="Splashbox" id="home">
            <div className="Splashbox-Content-Wrapper">
                <TypingLetters text={"hi, i'm jennifer"}/>
                <Separator />
                <SplashboxBulletList />
            </div>
        </section>
    )
}