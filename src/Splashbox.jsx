import Separator from "./Separator";
import SplashboxBulletList from "./SplashboxBulletList";
import TypingLetters from "./TypingLetters";
import "./Splashbox.css";

export default function Splashbox(){
    return (
        <section className="Splashbox" id="home">
            <TypingLetters text={"hi, i'm jennifer"}/>
            <Separator />
            <SplashboxBulletList />
        </section>
    )
}