import "./Section.css";
import About from "./About";
import Resume from "./Resume";
import Contact from "./Contact";
import { titleCase } from "./Util";
import "./Section.css";
import { useEffect, useRef } from "react";

export default function Section({ title }) {
    const headingRef = useRef(null);

    const observerFunction = (entries) => {
        const [entry] = entries;

        const classList = entry.target.classList;
        const animationClassName = "Section-Heading-Animation";

        // entry.isIntersecting
        //     ? entry.target.classList.add("Section-Heading-Animation")
        //     : entry.target.classList.remove("Section-Heading-Animation");

        // entry.target.classList.toggle("Section-Heading-Animation");
        if (entry.isIntersecting && !classList.contains(animationClassName)) {
            classList.add(animationClassName);
        }
        else {
            classList.remove(animationClassName);
        }
    }


    useEffect(() => {
        const options = {
            root: null,
            rootMargin: "0px",
            threshold: 1.0
        }

        const observer = new IntersectionObserver(observerFunction, options);
        const headingRefCurrent = headingRef.current;

        if (headingRefCurrent) observer.observe(headingRefCurrent);

        return () => {
            if (headingRefCurrent) observer.unobserve(headingRefCurrent);
        }
    }, [headingRef])

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