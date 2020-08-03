import React, { useState } from 'react';
import {Link, NavLink} from 'react-router-dom';
import {FaAlignJustify,FaHotel} from 'react-icons/fa';
 

const Navbar  =()=>{
    const [isOpen, setIsOpen] = useState(false);

        return (
                <nav className="navbar">
                    <div className="nav-center">
                        <div className="nav-header">
                        <Link to='/'>
                            <FaHotel className="logo"/>
                         <span>Imperial Resort</span>
                         </Link>
                        <button 
                        type='button' 
                        className='nav-btn'
                        onClick={()=>setIsOpen(!isOpen)}>
                            <FaAlignJustify className='nav-icon' />
                        </button>
                        </div>
                        <ul className={isOpen ? `nav-links show-nav`: `nav-links`}>
                            <li>
                            <NavLink to='/'
                             onClick={()=>setIsOpen(!isOpen)}
                            >Home</NavLink>
                            </li>
                            <li>
                            <NavLink 
                            to='/rooms'
                            onClick={()=>setIsOpen(!isOpen)}
                            
                            >Rooms</NavLink>
                            </li>
                        </ul>
                    </div>   
                </nav>
        )
    }

  export default  Navbar;