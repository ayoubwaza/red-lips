import { useEffect, useRef } from "react";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import redLips from "../../public/great.jpg";
import gsap, { Expo } from "gsap";
import SplitText from "../../utils/Split3.min.js";
function Hero({ styles }) {
  const Main_Title = useRef(null);
  const leftTitle = useRef(null);
  const HeroImg = useRef(null);
  const rightTitle = useRef(null);
  const inDoubt = useRef(null);
  useEffect(() => {
    const split = new SplitText(Main_Title.current, {
      type: "lines",
      linesClass: "lineChildren",
    });
    const splitParent = new SplitText(Main_Title.current, {
      type: "lines",
      linesClass: "lineParent",
    });
    const tl = gsap.timeline({ defaults: { delay: 0.2, duration: 1.5 } });
    tl.fromTo(inDoubt.current, { opacity: 0 }, { opacity: 1 })
      .fromTo(
        inDoubt.current,
        { position: "absolute", top: "50%" },
        { position: "absolute", top: "5%" }
      )
      .fromTo(
        inDoubt.current,
        { position: "absolute", right: "50%" },
        { position: "absolute", right: "20%" }
      )
      .to(split.lines, {
        y: 0,
        opacity: 1,
        stagger: 0.1,
        ease: Expo.easeOut,
      })
      .fromTo(
        HeroImg.current,
        {
          clipPath: "polygon(0 0 , 0 0, 30% 100% , 0% 100%)",
          opacity: 0,
        },
        {
          opacity: 1,
          clipPath: "polygon(0 0 , 100% 0, 100% 100% , 0% 100%)",
        }
      )
      .fromTo(leftTitle.current, { opacity: 0, x: -500 }, { x: 50, opacity: 1 })
      .fromTo(
        rightTitle.current,
        { x: 500, opacity: 0 },
        { x: -150, opacity: 1 }
      )
      .to(HeroImg.current.children[0], { scale: 1.5 });
  }, []);
  useEffect(() => {
    const rotatedText = inDoubt.current;
    rotatedText.innerHTML = rotatedText.textContent.replace(
      /\S/g,
      '<span class="rotatedSpan">$&</span>'
    );
    const rotatedSpans = document.querySelectorAll(".rotatedSpan");
    rotatedSpans.forEach((letter, i) => {
      letter.style.transform = "rotate(" + i * 15 + "deg)";
    });
  }, []);
  return (
    <section className="hero">
      <style jsx global>
        {`
          body {
            overflow: hidden;
          }
        `}
      </style>
      <div className={styles._hero}>
        <h1 ref={Main_Title}>Red Lips</h1>
        <div className={styles._hero_Child}>
          <div ref={leftTitle} className={styles.left_title}>
            <span>Life's better in</span>
          </div>
          <div ref={HeroImg} className={styles._hero_container_Img}>
            <img src={redLips} width={840} height={440} alt="" />
          </div>
          <div ref={rightTitle} className={styles.right_title}>
            <span>red lipstick.</span>
          </div>
          <div ref={inDoubt} className={styles.in_Doubt}>
            When - in - doubt - wear - red
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
