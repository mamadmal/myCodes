import "./styles.css";

import html from "./html.png";
import css from "./css.png";
import es6 from "./es6.png";
import react from "./react.png";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";


import { useEffect, useRef } from "react";

export const Parallax = () => {
  const containerRef = useRef();

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const sections = gsap.utils.toArray(".panel");
    gsap.to(sections, {
      xPercent: -100 * (sections.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: ".container",
        pin: true,
        scrub: 1,
        snap: 1 / (sections.length - 1),
        end: () => "+=" + containerRef.current.offsetWidth,
      },
    });
  }, []);

  return (
    <>
     

      <div ref={containerRef} className="container">
        <section className="description panel blue section">
          <img src={html} alt="" className="img-in-scrrol"/>
          <h2>HTML</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi
            labore eius cum perferendis consectetur culpa laboriosam quam, sed
            ea nihil, suscipit, quidem est expedita. Nihil enim obcaecati
            deleniti eaque sed.
          </p>
        </section>
        <section className="panel red section">
          <img src={css} alt="" className="img-in-scrrol" />
          <h2>CSS</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi
            labore eius cum perferendis consectetur culpa laboriosam quam, sed
            ea nihil, suscipit, quidem est expedita. Nihil enim obcaecati
            deleniti eaque sed.
          </p>
        </section>
        <section className="description panel blue section">
          <img src={es6} alt="" className="img-in-scrrol" />
          <h2>ES6</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi
            labore eius cum perferendis consectetur culpa laboriosam quam, sed
            ea nihil, suscipit, quidem est expedita. Nihil enim obcaecati
            deleniti eaque sed.
          </p>
        </section>
        <section className="panel red">
          <img src={react} className="img-in-scrrol" alt="" />
          <h2>React JS</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi
            labore eius cum perferendis consectetur culpa laboriosam quam, sed
            ea nihil, suscipit, quidem est expedita. Nihil enim obcaecati
            deleniti eaque sed.
          </p>
        </section>
   
      </div>
    
    </>
  );
};

export default Parallax;