import React, { useEffect, useState } from 'react';
import axios from "axios";
import { Link, useParams } from 'react-router-dom';

import '../assets/css/style.css'
import customer01 from '../assets/imgs/customer01.jpg'




import { RiDashboardFill } from "react-icons/ri";
import { AiTwotoneHome } from "react-icons/ai";
import { AiOutlineMenuFold } from "react-icons/ai";
import { IoIosHome } from "react-icons/io";
import { RiHome6Fill } from "react-icons/ri";
import { IoIosPeople } from "react-icons/io";
import { TbBrandBooking } from "react-icons/tb";
import { GoSignOut } from "react-icons/go";

const StaffHome = () => {

  const func = () => {
    // let toggle = document.querySelector(".toggle");
    let navigation = document.querySelector(".navigation");
    let main = document.querySelector(".main");
    navigation.classList.toggle("active");
    main.classList.toggle("active");
  }

  const [staff, setStaff] = useState([]);

  const { id } = useParams()

  //load information to browser
  useEffect(() => {
    loadStaff();
  }, []);

  const loadStaff = async () => {
    const result = await axios.get("http://localhost:9090/staffs");
    setStaff(result.data);
  }

  const deleteStaff = async (id) => {
    await axios.delete(`http://localhost:9090/staff/${id}`)
    loadStaff()
  }

  // Search Bar/////////////////////////////////////////
 
  //////////////////////////////////////////////////////////

  return (
    <>
      {/* < !-- =============== Navigation ================ --> */}
      <div class="container1">
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
              <AiOutlineMenuFold onClick={() => { func() }} size='2rem' />
            </div>

            <div class="search">
              <label>
                <input type="text" placeholder="Search here...." />
                <Link to="/search"><i id="eyeIcon" class="fa-regular fa-eye"></i></Link>
              </label>
            </div>
           
          
          

            <div class="user">
              <img src={customer01} alt="" />
            </div>
          </div>

          {/* <!-- ======================= Cards ================== --> */}
          <div class="cardBox">

            {/* <div class="card"> */}

            <Link className='btn btn btn-primary me-2' to="/staffhome">Staff Details</Link>
            <Link className='btn btn btn-primary me-2' to="/addstaff">Add Staff</Link>
            <Link className='btn btn btn-primary me-2' to="/AddStaffEvents">Assign new Staff</Link>
            <Link className='btn btn btn-primary' to="/ViewAssignStaff">Assign Staff Each Events</Link>





          </div>
          {/* </div> */}

          {/* <!-- ================ Order Details List ================= --> */}
          <div class="details" style={{ width: '1850px', height: 'auto' }}>
            <div class="recentOrders">



              <div className='container'>

                <div className='py-4'>
                  <h1>STAFF DETAILS</h1>
                  <br /><br />

                  <table className="table border shadow">
                    <thead>
                      <tr>
                        <th scope="col">Staff ID</th>
                        <th scope="col">Staff Name</th>
                        <th scope="col">E-mail</th>
                        <th scope="col">contact</th>
                        <th scope="col">Action</th>
                      </tr>
                    </thead>
                    <tbody>

                      {
                        staff.map((staff, index) => (
                          <tr>
                            <th scope="row" key={index}>{index + 1}</th>
                            <td>{staff.staffName}</td>
                            <td>{staff.email}</td>
                            <td>{staff.contact}</td>
                            <td>
                              <Link className='btn btn-primary mx-2' to={`/viewstaff/${staff.id}`}>View</Link>
                              <Link className='btn btn-outline-primary mx-2' to={`/editstaff/${staff.id}`}>Update</Link>
                              <button className='btn btn-danger mx-2' onClick={() => deleteStaff(staff.id)}>Delete</button>
                            </td>
                          </tr>

                        ))
                      }




                    </tbody>
                  </table>

                </div>
              </div>




            </div>
          </div>
        </div>
      </div>


    </>
  )
}

export default StaffHome