import BackToTop from './components/navigation/BackToTop.jsx';
import Navbar from './components/navigation/Navbar'
import Footer from './components/section-contents/Footer.jsx';
import Splashbox from './components/splashbox-components/Splashbox'
import Section from './components/util-components/Section.jsx'

function App() {

    const sections = [
        "portfolio",
        "about",
        "resume",
        "contact"
    ];

    return (
        <>
            <Navbar sections={sections}/>
            <Splashbox />
            <BackToTop />
            {sections.map( (sections, index) => (
                    <Section title={sections} key={index}/>
            ))}
            <Footer />
        </>
    )
}

export default App
