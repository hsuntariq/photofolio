import React, { useRef } from 'react'
import { BiCamera } from "react-icons/bi";
import { FaTwitter, FaInstagram, FaLinkedin, FaFacebook } from "react-icons/fa";
import { IoChevronDown } from "react-icons/io5";
import { GoChevronRight } from "react-icons/go";
import { IoMdClose } from "react-icons/io";
import { RxHamburgerMenu } from "react-icons/rx";

import './nav.css'
import { Link } from 'react-router-dom';
const Nav = () => {
    const menu = useRef();

    const showMenu = () => {
        menu.current.style.transform = 'translateX(0)'
    }
    const closeMenu = () => {
        menu.current.style.transform = 'translateX(100%)'
    }



    return (
        <>
            <div className="d-flex main p-3 align-items-center justify-content-between">
                <div className="logo">
                    <div className="d-flex align-items-center gap-2">
                        <BiCamera color='#32CF93' size={40} />
                        <h3>PhotoFolio</h3>
                    </div>
                </div>
                <div ref={menu} className="menu">
                    <IoMdClose onClick={closeMenu} size={30} className='cross' />
                    <ul className='text-uppercase text-secondary d-flex list-unstyled gap-3 p-0 m-0'>
                        <Link to='/'>home</Link>
                        <Link to='/about'>About</Link>
                        <li className='position-relative gal'>Gallery <IoChevronDown />
                            <div className="sub-menu rounded-1 position-absolute ps-2  py-2">
                                <ul className='list-unstyled d-flex flex-column gap-2  text-capitalize '>
                                    <li>nature</li>
                                    <li>people</li>
                                    <li>architecture</li>
                                    <li>animal</li>
                                    <li>sports</li>
                                    <li>travel</li>
                                    <li className='d-flex justify-content-between align-items-center sub-sub position-relative'>submenu <GoChevronRight />
                                        <div className="sub-menu-child rounded-1 position-absolute ps-2  py-2">
                                            <ul className='list-unstyled d-flex flex-column gap-2  text-capitalize '>
                                                <li>nature</li>
                                                <li>people</li>
                                                <li>architecture</li>
                                            </ul>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <Link to='/services' >services</Link>
                        <Link to="/contact" >contact</Link>
                    </ul>
                </div>
                <div className="social-icons">
                    <div className="d-flex gap-3">
                        <FaTwitter size={25} />
                        <FaFacebook size={25} />
                        <FaLinkedin size={25} />
                        <FaInstagram size={25} />
                    </div>
                </div>
                <RxHamburgerMenu onClick={showMenu} size={30} className='list' cursor="pointer" />
            </div>
        </>
    )
}

export default Nav