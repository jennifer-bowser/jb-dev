import About from "./About";
import "./Section.css";
// import { useEffect, useRef } from "react";

export default function Section({title}){
    // const headingRef = useRef(null);

    // const observerFunction = (entries) => {
    //     const [entry] = entries;

    //     const classList = entry.target.classList;
    //     const animationClassName = "Section-Heading-Animation";

    //     // entry.isIntersecting
    //     //     ? entry.target.classList.add("Section-Heading-Animation")
    //     //     : entry.target.classList.remove("Section-Heading-Animation");

    //     // entry.target.classList.toggle("Section-Heading-Animation");
    //     if(entry.isIntersecting && !classList.contains(animationClassName)){
    //         classList.add(animationClassName);
    //     }
    //     else{
    //         classList.remove(animationClassName);
    //     }
    // }

    // const options = {
    //     root: null,
    //     rootMargin: "0px",
    //     threshold: 1.0
    // }

    // useEffect( () => {
    //     const observer = new IntersectionObserver(observerFunction, options);
    //     if(headingRef.current) observer.observe(headingRef.current);

    //     return () => {
    //         if(headingRef.current) observer.unobserve(headingRef.current);
    //     }
    // }, [headingRef, options])

    const components = {
        "about": <About />
    }

    return(
        <section className="Section">
            <h1 /*ref={headingRef}*/ id={title}>{title}<span className="Accent-Text">.</span></h1>
            {components[title] ?? ""}
        </section>
    )
}