import BulletList from "../../util-components/BulletList";
import "./SplashboxBulletList.css";

export default function SplashboxBulletList(){
    const listItems=[
        "i'm a software engineer.",
        "i do full-stack development.",
        "check out my work"
    ];

    return (
        <div className="SplashboxBulletList">
            <BulletList listItems={listItems} customBullet={">"} />
        </div>
    )
}