import React from "react";
import Carousel from "../components/Carousel";

const image1 =
  "https://static.vecteezy.com/system/resources/previews/010/842/688/original/3d-illustration-ethereum-blockchain-png.png";
const image2 = "https://cdn-icons-png.flaticon.com/512/8757/8757988.png";
const image3 = "https://cdn-icons-png.flaticon.com/512/2091/2091665.png";

const images = [image1, image2, image3];
const Login = () => {
  return (
    <div className="w-full h-[100vh] bg-primary-1 flex items-center">
      <div className="w-[65%] h-[90%] mx-auto rounded-2xl flex">
        <div className="flex flex-col w-[50%] bg-primary-2 rounded-l-2xl p-5 text-center">
          
          <div className="flex justify-center items-center mt-20">
            <Carousel images={images} />
          </div>
          <span className="text-3xl  text-white my-5">
            Blockchain website
          </span>
          <span className="text-2xl text-white my-3 w-3/4 mx-auto font-light">
            Unlocking the Future: Empowering Possibilities with Blockchain Innovation
          </span>
          <span className="text-4xl text-white my-3">
            Blockchain website
          </span>
        
        </div>
        <div className="w-[50%] rounded-r-2xl bg-white">Okay</div>
      </div>
    </div>
  );
};

export default Login;
