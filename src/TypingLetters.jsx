import "./TypingLetters.css";

export default function TypingLetters({ text }) {
    return (
        <div className="TypingLetters">
            <p className="TypingLetters-Text">{text}</p>
            <div className="TypingLetters-Background"></div>
        </div>
    )
}