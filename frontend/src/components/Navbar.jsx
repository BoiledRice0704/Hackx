import React from 'react'
import "../App.css"
import homeIcon from "../assets/home.png"
import learnIcon from "../assets/learn.png"
import profileIcon from "../assets/grid.png"
import dP from "../assets/profile.png"
import meet from "../assets/meet.png"

const Navbar = () => {
  return (
    <div className='bg-[#0C0C0C] h-20 flex justify-around items-center'>
        <div className="middle flex h-fit items-center justify-center bg-[#2C2C2C] rounded-[61px] ml-[30rem]">
            <div className="icons flex">
                <a href="/home" className='icon-container flex'><img src={homeIcon} style={{filter:"invert(1)",width:"25px"}}></img></a>
                <a href="/learn-lang" className='icon-container flex'><img src={learnIcon} className='w-[30px]' style={{filter:"invert(1)"}}></img></a>
                <a href="#" className='icon-container flex'><img src={meet} className=' w-[28px] backdrop-filter' ></img></a>
            </div>
        </div>
        <div className="right flex h-fit items-center justify-center bg-[#2C2C2C] rounded-[61px] mr-[-7rem]">
            <div className="icons flex">
                <a href="#" className='icon-container flex'><img src={dP}></img></a>
                <a href="#" className='icon-container flex'><img src={profileIcon} style={{filter:"invert(1)"}}></img></a>
            </div>
        </div>
    </div>
  )
}

export default Navbar