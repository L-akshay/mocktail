"use client";

import "../lib/registerGsap.js";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";
import { useRef } from "react";
import { useMediaQuery } from "react-responsive";

const Hero = () => {
  const videoRef = useRef(null);

  const isMobile = useMediaQuery({ maxWidth: 767 });

  useGSAP(() => {
    const heroSplit = new SplitText(".title", {
      type: "chars, words",
    });

    const paragraphSplit = new SplitText(".subtitle", {
      type: "lines",
    });

    heroSplit.chars.forEach((char) => char.classList.add("text-gradient"));

    gsap.from(heroSplit.chars, {
      yPercent: 100,
      duration: 1.8,
      ease: "expo.out",
      stagger: 0.06,
    });

    gsap.from(paragraphSplit.lines, {
      opacity: 0,
      yPercent: 100,
      duration: 1.8,
      ease: "expo.out",
      stagger: 0.06,
      delay: 1,
    });

    gsap
      .timeline({
        scrollTrigger: {
          trigger: "#hero",
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      })
      .to(".right-leaf", { y: 200 }, 0)
      .to(".left-leaf", { y: -200 }, 0)
      .to(".arrow", { y: 100 }, 0);

    const startValue = isMobile ? "top 50%" : "center 60%";
    const endValue = isMobile ? "120% top" : "bottom top";

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "video",
        start: startValue,
        end: endValue,
        scrub: true,
        pin: true,
      },
    });

    if (!videoRef.current) return;

    videoRef.current.onloadedmetadata = () => {
      tl.to(videoRef.current, {
        currentTime: videoRef.current.duration,
      });
    };
  }, [isMobile]);

  return (
    <>
      <section id="hero" className="noisy">
        <h1 className="title">モヒート</h1>

        <img src="/images/hero-left-leaf.png" alt="left-leaf" className="left-leaf" />
        <img src="/images/hero-right-leaf.png" alt="right-leaf" className="right-leaf" />

        <div className="body">
          <div className="content">
            <div className="space-y-5 hidden md:block">
              <p>涼やかに。鮮やかに。クラシックに。</p>
              <p className="subtitle">
                夏の気配を <br /> 一口ずつ
              </p>
            </div>

            <div className="view-cocktails">
              <p className="subtitle">
                メニューの一杯一杯は、上質な素材、自由な発想、時代を超えるレシピを重ねたもの。
                五感に心地よく届くように仕上げています。
              </p>
              <a href="#cocktails">カクテルを見る</a>
            </div>
          </div>
        </div>
      </section>

      <div className="video absolute inset-0">
        <video ref={videoRef} muted playsInline preload="none" src="/videos/output.mp4" />
      </div>
    </>
  );
};

export default Hero;
