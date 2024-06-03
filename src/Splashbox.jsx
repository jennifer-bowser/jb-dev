import BulletList from "./BulletList";
import Separator from "./Separator";
import SplashboxBulletList from "./SplashBoxBulletList";
import "./Splashbox.css";
import TypingLetters from "./TypingLetters";

export default function Splashbox(){
    return (
        <section className="Splashbox" id="home">
            <TypingLetters text={"hi, i'm jennifer"}/>
            <Separator />
            <SplashboxBulletList />
        </section>
    )
}