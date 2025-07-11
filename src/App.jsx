import BackToTop from './components/navigation/BackToTop/BackToTop.jsx';
import Navbar from './components/navigation/Navbar/Navbar.jsx'
import Footer from './components/sections/Footer/Footer.jsx';
import Splashbox from './components/sections/Splashbox/Splashbox/Splashbox.jsx'
import Section from './components/sections/Section/Section.jsx'
import dotsVertical from '@/assets/flourishes/dots-vertical.svg'
import verticalCircles from "@/assets/flourishes/vertical-circles.svg"

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
                <>
                    {section === "resume" && <img src={dotsVertical} id="Dots-Vertical-Flourish" key={"dots-vertical-flourish"}></img>}
                    {section === "contact" && <img src={verticalCircles} id="Vertical-Circles-Flourish" key={"vertical-circles-flourish"}></img>}
                    <Section title={section} key={index} />
                </>
            ))}
            <Footer />
        </>
    )
}

export default App;
