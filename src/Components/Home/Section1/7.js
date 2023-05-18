import React from "react";
import { useScroll, animated, useSpring } from "@react-spring/web";
import { HomeSection1Wrapper } from "../styles";

import styles from "./styles.module.scss";

export default function HomeSection1({ title, subtitle, animatedTitle1, animatedTitle2 }) {
  const containerRef = React.useRef(null);

  const [textStyles1, textApi1] = useSpring(() => ({
    y: "100%",
  }));

  const [textStyles2, textApi2] = useSpring(() => ({
    y: "100%",
  }));

  const { scrollYProgress } = useScroll({
    onChange: ({ value: { scrollYProgress } }) => {
      console.log("scrollYProgress", scrollYProgress);
      if (scrollYProgress > 0.375) {
        textApi1.start({ y: "0" });
        textApi2.start({ y: "0" });
      } else {
        textApi1.start({ y: "100%" });
        textApi2.start({ y: "100%" });
      }
    },
    default: {
      immediate: true,
    },
  });

  return (
    <HomeSection1Wrapper ref={containerRef}>

      
      <div className={styles.animated__layers}>
        <animated.div
          className={styles.dot}
          style={{
            clipPath: scrollYProgress.to((val) => `circle(${val * 175}%)`),
          }}
        >
          <h1 className={styles.title}>
            <span>
              <animated.span style={{ transform: textStyles1.y.to(y => `translateY(${y})`) }}>          {animatedTitle1}
</animated.span>
            </span>
            <span>
              <animated.span style={{ transform: textStyles2.y.to(y => `translateY(${y})`) }}>{animatedTitle2}</animated.span>
            </span>
          </h1>
        </animated.div>
      </div>
    </HomeSection1Wrapper>
  );
}
