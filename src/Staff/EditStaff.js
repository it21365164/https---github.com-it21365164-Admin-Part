import '../assets/css/style.css'
import axios from 'axios';
import customer01 from '../assets/imgs/customer01.jpg'
//import customer02 from '../assets/imgs/customer02.jpg'

import React, { useEffect, useState } from 'react';
import { Link, useNavigate,useParams } from 'react-router-dom';

import { RiDashboardFill } from "react-icons/ri";
import { AiTwotoneHome } from "react-icons/ai";
import { AiOutlineMenuFold } from "react-icons/ai";
import { IoIosHome } from "react-icons/io";
import { RiHome6Fill } from "react-icons/ri";
import { IoIosPeople } from "react-icons/io";
import { TbBrandBooking } from "react-icons/tb";
import { GoSignOut } from "react-icons/go";

const EditStaff = () => {

  const func = () => {
    // let toggle = document.querySelector(".toggle");
    let navigation = document.querySelector(".navigation");
    let main = document.querySelector(".main");
    navigation.classList.toggle("active");
    main.classList.toggle("active");
  }

  let navigate = useNavigate();

    const {id}=useParams();


    const [staff, setStaff] = useState({
        staffName: "",
        contact: "",
        email: ""
    })

    const { staffName, contact, email } = staff

    const onInputChange = (e) => {
        setStaff({ ...staff, [e.target.name]: e.target.value })
    }

    useEffect(() => {
        loadStaff();
    }, []);




    //call DB
    const onSubmit =async (e) => {
     e.preventDefault();
     await axios.put(`http://localhost:9090/staff/${id}`,staff)
     navigate("/");

    };

    const loadStaff =async ()=>{
        const result=await axios.get(`http://localhost:9090/staff/${id}`)
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
                    <h2 className='text-center m-4'>Edit Staff Member</h2>
                    <form onSubmit={(e) => onSubmit(e)}>
                        <div className='mb-3'>
                            <label htmlFor="Staff Name" className='form-lable'>Name of the Employee :</label>
                            <input type={"text"} className="form-control" placeholder='Enter your name' name='staffName' value={staffName} onChange={(e) => onInputChange(e)} />
                        </div>

                        <div className='mb-3'>
                            <label htmlFor="Contact" className='form-lable'>Contact Number :</label>
                            <input type={"text"} className="form-control" placeholder='Enter your user name' name='contact' value={contact} onChange={(e) => onInputChange(e)} />
                        </div>

                        <div className='mb-3'>
                            <label htmlFor="E-mail" className='form-lable'>E-mail :</label>
                            <input type={"text"} className="form-control" placeholder='Enter your E-mail' name='email' value={email} onChange={(e) => onInputChange(e)} />
                        </div>
                        <button type='submit' className='btn btn-outline-primary'>Submit</button>
                        <Link  className='btn btn-outline-danger mx-2' to="/">Cancel</Link>
                    </form>
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

export default EditStaff
