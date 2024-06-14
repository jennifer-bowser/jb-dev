import "./ImageTile.css";

export default function StackTile({altText, imgSrc}){
    return (
        <div className="ImageTile">
            <img src={imgSrc} key={altText} alt={altText} className="About-Stack-Img" id={altText}/>
        </div>
    );
}