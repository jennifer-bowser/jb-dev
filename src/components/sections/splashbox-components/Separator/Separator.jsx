import "./Separator.css";

export default function Separator({ sections }) {
    return (
        <div className="Separator">
            <a className="Separator-Link" href={"#" + sections[0]}> <span className="Accent-Text">&larr;</span> have a look</a>
            <div className="Separator-Line"></div>
        </div>
    )
}