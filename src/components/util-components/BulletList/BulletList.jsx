import "./BulletList.css";

export default function BulletList({ listItems, customBullet }) {
    const bullet = customBullet ?? '–'; // en-dash default
    const listStyle = { listStyleType: "'" + bullet + "'" }

    return (
        <ul className="BulletList" style={listStyle}>
            {listItems.map((item, index) => (
                <li className="BulletList-Item" key={index}>{item}</li>
            ))}
        </ul>
    )
}
