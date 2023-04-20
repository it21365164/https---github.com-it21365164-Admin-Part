import React from 'react'
import '../assets/css/style.css'
import customer01 from '../assets/imgs/customer01.jpg'
import customer02 from '../assets/imgs/customer02.jpg'

import { RiDashboardFill } from "react-icons/ri";
import { AiTwotoneHome } from "react-icons/ai";
//import { IoHome } from "react-icons/io";
import { IoIosHome } from "react-icons/io";
import { RiHome6Fill } from "react-icons/ri";
import { IoIosPeople } from "react-icons/io";
import { TbBrandBooking } from "react-icons/tb";
import { GoSignOut } from "react-icons/go";

const header = () => {

    const func = () => {
      // let toggle = document.querySelector(".toggle");
      let navigation = document.querySelector(".navigation");
      let main = document.querySelector(".main");
      navigation.classList.toggle("active");
      main.classList.toggle("active");
    }

    return (
        <>
          {/* < !-- =============== Navigation ================ --> */}
          <div class="container">
            <div class="navigation">
              <ul>
                <li>
                  <a href="#">
                    <span class="icon">
                      <ion-icon name="logo-apple"></ion-icon>
                    </span>
                    <span class="title">FRESCO</span>
                  </a>
                </li>
    
                <li>
                  <a href="/">
                    <span class="icon">
                    <RiDashboardFill size='2rem' />
                    </span>
                    
                    <span class="title">Dashboard</span>
                  </a>
                </li>
    
                <li>
                  <a href="#">
                    <span class="icon">
                    <AiTwotoneHome size='2rem' />
                    </span>
                    <span class="title">Wedding Halls</span>
                  </a>
                </li>
    
                <li>
                  <a href="#">
                    <span class="icon">
                    <RiHome6Fill size='2rem' />
                    </span>
                    <span class="title">Conference Halls</span>
                  </a>
                </li>
    
                <li>
                  <a href="#">
                    <span class="icon">
                    <IoIosHome size='2rem' />
                    </span>
                    <span class="title">Venues</span>
                  </a>
                </li>
    
                <li>
                  <a href="/staffhome">
                    <span class="icon">
                    <IoIosPeople size='2rem' />
                    </span>
                    <span class="title">Staff Crew</span>
                  </a>
                </li>
    
                <li>
                  <a href="#">
                    <span class="icon">
                    <TbBrandBooking size='2rem' />
                    </span>
                    <span class="title">Booked Events</span>
                  </a>
                </li>
    
                <li>
                  <a href="#">
                    <span class="icon">
                    <GoSignOut size='2rem' />
                    </span>
                    <span class="title">Sign Out</span>
                  </a>
                </li>
              </ul>
            </div>
    
            {/* <!-- ========================= Main ==================== --> */}
            <div class="main">
              <div class="topbar">
                <div class="toggle">
                <RiDashboardFill onClick={() => {func()}} size='2rem' />
                </div>
    
                <div class="search">
                  <label>
                    <input type="text" placeholder="Search here"/>
                    {/* <RiDashboardFill size='2rem' /> */}
                    <i id="eyeIcon" class="fa-regular fa-eye"></i>
                  </label>
                </div>
    
                <div class="user">
                  <img src={customer01} alt=""/>
                </div>
              </div>
    
              
    
              
                </div>
    
                
                </div>
              
            
          
    
         
        </>
      )
    }
    
    export default header
