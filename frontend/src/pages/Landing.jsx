import React from "react";
import bg from "../assets/Landing/bg.jpeg";
import "../assets/Landing/landing.css";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Landing = () => {
  return (
    <div
      className="min-h-[100vh] bg-cover font-asap"
      style={{ backgroundImage: `url(${bg})`,backgroundPosition:"center" }}
    >
        
      <div className="background w-full min-h-[100vh] relative">  
      
        <div className="parallax h-[85vh] border-white border-[5px] absolute w-full top-[5rem]">
        <Parallax pages={2}>
          <ParallaxLayer offset={0}
            speed={1}>
            <motion.h1 className="text-white top-[50%] absolute  text-5xl font-light text-center w-full" initial={{ }}
            animate={{ y: 0 }}
            transition={{ delay: 0.1 }}>
                Communicate without any <br />language barrier!
            </motion.h1>
          </ParallaxLayer>
          <ParallaxLayer
            offset={0.8}
            speed={2}
            style={{ backgroundColor: "#805E73" }}
          />
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
