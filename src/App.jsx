import BackToTop from './components/navigation/BackToTop.jsx';
import Navbar from './components/navigation/Navbar'
import Footer from './components/section-contents/Footer/Footer.jsx';
import Splashbox from './components/splashbox-components/Splashbox/Splashbox.jsx'
import Section from './components/util-components/Section.jsx'

function App() {

    const sections = [
        "about",
        "resume",
        "contact"
    ];

    return (
        <>
            <Navbar sections={sections}/>
            <Splashbox />
            <BackToTop />
            {sections.map( (section, index) => (
                <Section title={section} key={index}/>
            ))}
            <Footer />
        </>
    )
}

export default App;
