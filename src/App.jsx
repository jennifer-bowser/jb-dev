import Navbar from './Navbar'
import Splashbox from './Splashbox'
import Section from './Section'

function App() {

    const sectionTitles = [
        "portfolio",
        "about",
        "resume",
        "contact"
    ];

    return (
    <>
        <Navbar sectionTitles={sectionTitles}/>
        <Splashbox />
        {sectionTitles.map( (sectionTitle, index) => (
                <Section title={sectionTitle} content="" key={index}/>
        ))}
    </>
    )
}

export default App
