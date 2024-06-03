import BulletList from "./BulletList";

export default function SplashboxBulletList(){
    const listItems=[
        "i'm a software engineer.",
        "i do full-stack development.",
        "check out my work"
    ];

    return(
        <BulletList listItems={listItems} />
    )
}