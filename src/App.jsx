import BackToTop from './components/navigation/BackToTop/BackToTop.jsx';
import Navbar from './components/navigation/Navbar/Navbar.jsx'
import Footer from './components/sections/Footer/Footer.jsx';
import Splashbox from './components/splashbox-components/Splashbox/Splashbox.jsx'
import Section from './components/sections/Section/Section.jsx'

function App() {

    const sections = [
        "about",
        "resume",
        "contact"
    ];

    return (
        <>
            <Navbar sections={sections} />
            <Splashbox sections={sections} />
            <BackToTop />
            {sections.map((section, index) => (
                <Section title={section} key={index} />
            ))}
            <Footer />
        </>
    )
}

export default App;
