import "./Section.css";
import About from "../About/About.jsx";
import Resume from "../Resume/Resume.jsx";
import Contact from "../Contact/Contact.jsx";
import { titleCase } from "../../../util/Util";
import { useEffect, useRef } from "react";

export default function Section({ title }) {
    
    /* --- Begin Heading Slide-In Animation --- */
    const headingRef = useRef(null);

    const observerFunction = (entries) => {
        const [entry] = entries;

        const classList = entry.target.classList;
        const animationClassName = "Section-Heading-Animation";

        if (entry.isIntersecting && !classList.contains(animationClassName)) {
            classList.add(animationClassName);
        }
        else if(!entry.isIntersecting) {
            classList.remove(animationClassName);
        }
    }

    useEffect(() => {
        const options = {
            root: null,
            rootMargin: "0px",
            threshold: 0.9
        }

        const observer = new IntersectionObserver(observerFunction, options);
        const headingRefCurrent = headingRef.current;

        if (headingRefCurrent) observer.observe(headingRefCurrent);

        return () => {
            if (headingRefCurrent) observer.unobserve(headingRefCurrent);
        }
    }, [headingRef])

    /* --- End Heading Slide-In Animation --- */

    const components = {
        "about": <About />,
        "resume": <Resume />,
        "contact": <Contact />
    }

    return (
        <section className={`Section ${titleCase(title)}`} id={title}>
            <h1 ref={headingRef}>{title}<span className="Accent-Text">.</span></h1>
            {components[title] ?? ""}
        </section>
    )
}