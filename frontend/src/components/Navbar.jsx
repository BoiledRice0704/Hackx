import React from 'react'
import "../App.css"
import homeIcon from "../assets/home.png"

const Navbar = () => {
  return (
    <div className='bg-[#0C0C0C] h-20 flex justify-center items-center'>
        <div className="middle flex h-fit items-center justify-center bg-[#2C2C2C] rounded-[61px]">
            <div className="icons flex">
                <a href="#" className='icon-container flex'><img src={homeIcon}></img></a>
                <a href="#" className='icon-container flex'><img src={homeIcon}></img></a>
                <a href="#" className='icon-container flex'><img src={homeIcon}></img></a>
                <a href="#" className='icon-container flex'><img src={homeIcon}></img></a>
            </div>
        </div>
        <div className="middle flex h-fit items-center justify-center bg-[#2C2C2C] rounded-[61px]">
            <div className="icons flex">
                <a href="#" className='icon-container flex'><img src={homeIcon}></img></a>
                <a href="#" className='icon-container flex'><img src={homeIcon}></img></a>
            </div>
        </div>
    </div>
  )
}

export default Navbar