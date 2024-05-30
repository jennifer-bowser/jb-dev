import "./TypingLetters.css";

export default function TypingLetters({text}){
    return (
        <div>
            <p className="TypingLetters-Text">{text}</p>
            <div className="TypingLetters-Background"></div>
        </div>
    )
}