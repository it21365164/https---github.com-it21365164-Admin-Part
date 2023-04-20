import '../assets/css/style.css'
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import customer01 from '../assets/imgs/customer01.jpg'
//import customer02 from '../assets/imgs/customer02.jpg'

import { RiDashboardFill } from "react-icons/ri";
import { AiTwotoneHome } from "react-icons/ai";
import { AiOutlineMenuFold } from "react-icons/ai";
import { IoIosHome } from "react-icons/io";
import { RiHome6Fill } from "react-icons/ri";
import { IoIosPeople } from "react-icons/io";
import { TbBrandBooking } from "react-icons/tb";
import { GoSignOut } from "react-icons/go";

const ViewAssignStaffDetails = () => {

  const func = () => {
    // let toggle = document.querySelector(".toggle");
    let navigation = document.querySelector(".navigation");
    let main = document.querySelector(".main");
    navigation.classList.toggle("active");
    main.classList.toggle("active");
  }

  const [assignStaffEvents, setStaff] = useState({
    staffName: "",
    date: "",
    time: "",
    venue: "",
    duty: ""
})

const { id } = useParams();

useEffect(() => {
    loadStaff()
}, [])

const loadStaff = async () => {
    const result = await axios.get(`http://localhost:9090/assignStaffEvents/${id}`)
    setStaff(result.data)
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
              <a href="/bookedevents">
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
            <AiOutlineMenuFold onClick={() => {func()}} size='2rem' />
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

          {/* <!-- ======================= Cards ================== --> */}
          <div class="cardBox">
            {/* <div class="card"> */}
              
            <Link className='btn btn-outline-light me-2' to="/staffhome">Staff Details</Link>
            <Link className='btn btn-outline-light me-2' to="/addstaff">Add Staff</Link>
            <Link className='btn btn-outline-light me-2' to="/AddStaffEvents">Assign new Staff</Link>
            <Link className='btn btn-outline-light' to="/ViewAssignStaff">Assign Staff Each Events</Link>
              
          {/* </div> */}
         </div>

          {/* <!-- ================ Order Details List ================= --> */}
          <div class="details" style={{ width: '1850px', height: 'auto' }}>
            <div class="recentOrders">
              <div class="cardHeader">
               

              </div>
               
              <div className='container'>
              <div className='row'>
                <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow' >
                    <h2 className='text-center m-4'>View Staff Details</h2>

                    <div className='card'>
                        <div className='card-header'>
                                    <b>Staff ID :</b> {assignStaffEvents.id}
                            <ul className='list-group list-group-flush'>
                                <li className='list-group-iteam'>
                                    <b>Name :</b>{assignStaffEvents.staffName}
                                </li>
                                <li className='list-group-iteam'>
                                    <b>E-mail:</b>{assignStaffEvents.date}
                                </li>
                                <li className='list-group-iteam'>
                                    <b>Contact:</b>{assignStaffEvents.time}
                                </li>
                                <br/>
                                <li className='list-group-iteam'>
                                    <b>Venue:</b>{assignStaffEvents.venue}
                                </li>
                                <li className='list-group-iteam'>
                                    <b>Duty:</b>{assignStaffEvents.duty}
                                </li>
                            </ul>
                        </div>
                    </div>
                    <Link className='btn btn-primary my-2' to={"/ViewAssignStaff"}>Back to Home</Link>
                </div>
            </div>
        </div>
              




            </div>
          </div>
        </div>
      </div>

     
    </>
  )
}

export default ViewAssignStaffDetails
