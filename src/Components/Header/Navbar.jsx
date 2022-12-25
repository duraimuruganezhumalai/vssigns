import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { AiOutlineClose } from 'react-icons/ai';
// import { HiOutlineMenuAlt4 } from 'react-icons/hi';
import { FaBars } from "react-icons/fa";
import { Fade as Hamburger } from 'hamburger-react'
import { VscChromeClose } from "react-icons/vsc";
import applogo from "../../Assets/Navbar/Logo.png"
import { Link } from "react-router-dom";






const Navbar = () => {


    const [nav, setNav] = useState(false);
    const [logo, setLogo] = useState(false)
    const handleNav = () => {
        setNav(!nav);
        setLogo(!logo)
    }

    let Links = [
        { name: "Home", link: "/" },
        { name: "Services", link: "/services" },
        { name: "Project", link: "/project" },
        { name: "Contact Us", link: "/contact-us" },
    ];

    // const activeLink = 'text-red-800'
    // className = {({isActive})} => isActive ? activeLink : null;


    return (
        <React.Fragment>
            <div className="flex justify-center">
                <div className='flex w-full justify-between items-center bg-white shadow h-15 fixed z-10 px-4'>
                    {/* <div className='flex w-full justify-between h-20 px-4 fixed'> */}
                    <Link to="/" className="flex flex-row">
                        {/* <h1 onClick={handleNav} className={logo ? 'hidden' : 'block'}>Vssigns</h1> */}
                        <img className="mr-2" src={applogo} alt="app-logo" width={20} />
                        <h1 className={logo ? 'hidden' : 'block'} >Vssigns</h1>
                    </Link>
                    <ul className='hidden md:flex flex items-center transition duration-500 ease-in-out'>
                        {
                            Links.map((link) => (
                                <li key={link.name} className='p-4 text-lg'>
                                    <NavLink to={link.link} className={({ isActive }) => (isActive ? 'text-red-600' : 'text-black')}>{link.name}</NavLink>
                                </li>
                            ))
                        }
                    </ul>
                    <div className='hidden md:flex'>
                        {/* <BiSearch className='' size={20} />
                            <BsPerson size={20} /> */}
                        {/* <span>+91 79046 39176</span> */}
                        <a href="/#" className="flex items-center space-x-1" target="_blank" title="Call">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
                            </svg>
                            <span>+91 79046 39176</span>
                        </a>
                    </div>

                    {/* Hamburger */}
                    <div onClick={handleNav} className='md:hidden z-10 cursor-pointer'>
                        {/* {nav ? <AiOutlineClose className='text-black' size={20} /> : <HiOutlineMenuAlt4 size={20} />} */}
                        {/* {nav ? <AiOutlineClose className='text-black' size={20} /> : <FaBars size={20} />} */}
                        {nav ? <VscChromeClose direction="right" className='text-black' size={20} /> : <FaBars direction="right" size={20} />}
                    </div>
                    {/* Mobile menu dropdown */}
                    <div onClick={handleNav} className={nav ? 'absolute left-0 top-0 w-full bg-gray-100/90 px-4 py-5 flex flex-col transition duration-500 ease-in-out' : 'absolute left-[-100%]'}>
                        <ul className="">

                            {
                                Links.map((link) => (
                                    <li key={link.name} className='py-3'>
                                        <NavLink to={link.link} className={({ isActive }) => (isActive ? 'text-red-600' : 'text-black')}>{link.name}</NavLink>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </React.Fragment >
    )
}

export default Navbar;