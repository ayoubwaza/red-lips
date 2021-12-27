import { useState, useRef, useEffect } from "react";
import gsap, { Expo } from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import hoverEffect from "hover-effect";
function Story({ styles }) {
  gsap.registerPlugin(ScrollTrigger);
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
        /* snap: {
          snapTo: 1 / (panels.length - 1),
          inertia: false,
          duration: { min: 2, max: 2 },
        }, */
        end: () => "+=" + document.querySelector(".wrappingIT").offsetWidth,
      },
    });
  }, []);
  //this second useRffect is used  to contrôl scrollEffect for each section
  const story = useRef(null);
  const Firstyear = useRef(null);
  const storyFirstImage = useRef(null);
  const storySecondImage = useRef(null);
  const storyLastImage = useRef(null);
  const SecondYear = useRef(null);
  const secondYear_firstImage = useRef(null);
  const secondYear_lastImage = useRef(null);
  const todayChild = useRef(null);
  useEffect(() => {
    const tl = gsap.timeline({
      ease: Expo.easeOut,
      delay: 0.2,
      duration: 1.6,
      scrollTrigger: {
        trigger: ".wrappingIT",
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
    //animating images in 2021 component or section whatever... :)
    const tlSecond = gsap.timeline({
      ease: Expo.easeOut,
      delay: 0.2,
      duration: 3,
      scrollTrigger: {
        trigger: SecondYear.current,
        start: "top 100%",
        scrub: 1,
        end: "=+300%",
      },
    });
    tlSecond
      .fromTo(
        secondYear_firstImage.current.children[0],
        {
          clipPath: "polygon(0 0 , 0 0, 0% 100% , 0% 100%)",
          opacity: 0,
        },
        {
          opacity: 1,
          clipPath: "polygon(0 0 , 100% 0, 100% 100% , 0% 100%)",
        }
      )
      .to(secondYear_firstImage.current.children[0], { scale: 1.3 })
      .fromTo(
        secondYear_lastImage.current.children[0],
        { clipPath: "inset(100% 100%)" },
        { clipPath: "inset(0% 0%)" }
      );
  }, []);
  //animating 2022 imageHovering Animation
  useEffect(() => {
    const HovredImage = new hoverEffect({
      parent: todayChild.current,
      image1: "/today.jpg",
      image2: "/today-1.jpg",
      intensity: 0.3,
      displacementImage: "/overlay1.jpg",
      easeind: Sine.easeOut,
    });
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
      <div ref={SecondYear} className={`panel ${styles.secondYear}`}>
        <div
          ref={secondYear_firstImage}
          className={styles.secondYearFirstImage}
        >
          <img src="/2021.jpg" alt="" />
        </div>
        <div className={styles.secondYear_text_Content}>
          <span>She Said ــــ</span>
          <div className={styles.secondYear_Quote}>
            I feel the most confident wearing red lipstick
          </div>
        </div>
        <div ref={secondYear_lastImage} className={styles.secondYearLastImage}>
          <img src="/2021-2.jpg" alt="" />
        </div>
      </div>
      <div className={`panel ${styles.today}`}>
        <div ref={todayChild} className={styles.today_Child}></div>
        <div className={styles.today_textContent}>
          <div className={styles.today_Quote}>
            “Nothing says confidence and glamour like a classic red lip.”
          </div>
          <i>ــــ Bobbi Brown</i>
        </div>
      </div>
    </section>
  );
}

export default Story;
