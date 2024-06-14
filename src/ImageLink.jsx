import "./ImageLink.css";

export default function ImageLink({imgSrc, altText, url}){
    return(
        <a className="ImageLink" href={url}>
            <img src={imgSrc} alt={altText}></img>
        </a>
    );
}