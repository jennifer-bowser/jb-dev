import "./ResumeHeader.css";

export default function ResumeHeader({ headingText }) {
    return (
        <div className="ResumeHeader">
            <div>
                <h3>{headingText}</h3>
                <div className="Block-Underline"></div>
            </div>
            <div className="ResumeHeadier-Block-Expander"></div>
        </div>
    )
}