import React, { useRef, useEffect, useState } from "react";
import bg from "../assets/Landing/bg.jpeg";
import "../assets/Landing/landing.css";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Landing = () => {
  const parallaxRef = useRef(null);
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (parallaxRef.current) {
        const parallaxDiv = parallaxRef.current.children[0]; // assuming the div is the first child
        if (parallaxDiv) {
          const position = parallaxDiv.scrollTop;
          setScrollPosition(position);
          console.log("Scroll Position:", position);
        }
      }
    };

    if (parallaxRef.current) {
      const parallaxDiv = parallaxRef.current.children[0];
      parallaxDiv.addEventListener("scroll", handleScroll);
      return () => {
        parallaxDiv.removeEventListener("scroll", handleScroll);
      };
    }
  }, [parallaxRef]);

  useEffect

  return (
    <div
      className="min-h-[100vh] bg-cover font-asap"
      style={{ backgroundImage: `url(${bg})`, backgroundPosition: "center" }}
    >
      <div className="background w-full min-h-[100vh] relative">
        <div
          className="parallax h-[85vh] border-white border-[5px] absolute w-full top-[5rem]"
          ref={parallaxRef}
        >
          <Parallax pages={2}>
            <ParallaxLayer offset={0} speed={0.1}>
            <div className="border-2 border-white top-[50%] absolute mx-auto w-full font-light text-center" 
            style={{width: `${Math.max(1.65, 3 - scrollPosition / 75)}rem`}}/>
              <motion.h1
                className="text-white top-[50%] absolute mx-auto w-full font-light text-center"
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ delay: 0.1 }}
                style={{
                  fontSize: `${Math.max(1.65, 3 - scrollPosition / 75)}rem`,
                  opacity:`${100-scrollPosition/1.2}%`
                }}
              >
                Communicate without any <br />
                language barrier!
              </motion.h1>
            </ParallaxLayer>
            <ParallaxLayer offset={0.5} speed={0.5}>
              <motion.h1
                className="text-white top-[50%] absolute mx-auto w-full text-5xl font-light text-center "
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ delay: 0.1 }}
              >
                Communicate without any <br />
                language barrier!
              </motion.h1>
            </ParallaxLayer>
            <ParallaxLayer
              offset={1}
              speed={2}
              style={{ backgroundColor: "#87BCDE" }}
            />
            <ParallaxLayer offset={0} speed={0} factor={3} />
          </Parallax>
        </div>
        <nav className="w-full flex justify-between p-5 fixed top-0">
          <div className="text-white  text-4xl">VartaLang</div>
          <div className="text-right text-[1.8rem]">
            <Link to="/login">
              <h1 className="animate-gradient-text ">Login/Signup</h1>
            </Link>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Landing;
