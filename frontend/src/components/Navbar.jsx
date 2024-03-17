import React from 'react'

import homeIcon from "../assets/home.png"
import learnIcon from "../assets/learn.png"
import profileIcon from "../assets/grid.png"
import dP from "../assets/profile.png"
import meet from "../assets/meet.png"
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='nav flex p-3 justify-center'>
        <div className="flex w-1/2 justify-center">
            <div className="flex justify-center">
                <a href="/home" className='p-1'><img src={homeIcon} style={{filter:"invert(1)",width:"30px"}}></img></a>
                <a href="/learn-lang" className='p-1'><img src={learnIcon} className='w-[30px]' style={{filter:"invert(1)"}}></img></a>
                <a href="#" className='p-1'><img src={meet} className=' w-[30px] backdrop-filter' ></img></a>
            </div>
        </div>


        <div className="">
            <div className="flex icons p-2 right-4 absolute">
                <Link to="#" className=''><img src={dP}></img></Link>
                <Link to="#" className=''><img src={profileIcon} style={{filter:"invert(1)"}}></img></Link>
            </div>
        </div>
    </div>
  )
}

export default Navbar