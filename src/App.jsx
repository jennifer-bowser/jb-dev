import Navbar from './components/navigation/Navbar'
import Splashbox from './components/Splashbox'
import Section from './components/Section'

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
                <Section title={sectionTitle} key={index}/>
        ))}
    </>
    )
}

export default App
