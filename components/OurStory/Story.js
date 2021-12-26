import { useState, useRef, useEffect } from "react";
import gsap, { Expo } from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
function Story({ styles }) {
  gsap.registerPlugin(ScrollTrigger);
  const story = useRef(null);
  useEffect(() => {
    const panels = gsap.utils.toArray(".panel");
    gsap.to(panels, {
      xPercent: -100 * (panels.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: ".wrappingIT",
        pin: true,
        start: "top top",
        scrub: 1,
        snap: {
          snapTo: 1 / (panels.length - 1),
          inertia: false,
          duration: { min: 2, max: 2 },
        },
        end: () => "+=" + document.querySelector(".wrappingIT").offsetWidth,
      },
    });
  }, []);
  //this second useRffect is used  to contrôl scrollEffect for each section
  const Firstyear = useRef(null);
  const storyFirstImage = useRef(null);
  const storySecondImage = useRef(null);
  const storyLastImage = useRef(null);
  //const Firstyear = useRef(null)
  useEffect(() => {
    const tl = gsap.timeline({
      ease: Expo.easeOut,
      delay: 0.2,
      duration: 2,
      scrollTrigger: {
        trigger: Firstyear.current,
        start: "top 100%",
        scrub: 1,
      },
    });
    tl.to(storyFirstImage.current, { y: 23 });
    tl.to(storyFirstImage.current.children[0], { scale: 1.5 });
    tl.to(storySecondImage.current, { y: 23 });
    tl.to(storySecondImage.current.children[0], { scale: 1.5 });
    tl.to(storyLastImage.current, { y: 23 });
    tl.to(storyLastImage.current.children[0], { scale: 1.5 });
  }, []);
  return (
    <section ref={story} className={`wrappingIT ${styles._story}`}>
      <div ref={Firstyear} className={`panel ${styles.firstYear}`}>
        <div className={styles.redLikeblood}>Red Like Blood</div>
        <div className={styles.firstYear_Images}>
          <div ref={storyFirstImage}>
            <img src="/storyFirstYear.jpg" alt="" />
          </div>
          <div ref={storySecondImage}>
            <img src="/storyFirstYear2.jpg" alt="" />
          </div>
          <div ref={storyLastImage}>
            <img src="/storyFirstYear3.jpg" alt="" />
          </div>
        </div>
        <div className={styles.firstYear_text}>
          <p>“If you’re sad, add more lipstick and attack.”</p>
        </div>
      </div>
      <div className={`panel ${styles.secondYear}`}>
        <div></div>
      </div>
      <div className={`panel ${styles.today}`}>
        <div></div>
      </div>
    </section>
  );
}

export default Story;
