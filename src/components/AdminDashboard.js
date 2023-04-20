import React from 'react'
import '../assets/css/style.css'
import customer01 from '../assets/imgs/customer01.jpg'
import customer02 from '../assets/imgs/customer02.jpg'

import { RiDashboardFill } from "react-icons/ri";
import { AiTwotoneHome } from "react-icons/ai";
import { AiOutlineMenuFold } from "react-icons/ai";
import { IoIosHome } from "react-icons/io";
import { RiHome6Fill } from "react-icons/ri";
import { IoIosPeople } from "react-icons/io";
import { TbBrandBooking } from "react-icons/tb";
import { GoSignOut } from "react-icons/go";

const AdminDashboard = () => {

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
            <div class="card">
              <div>
                <div class="numbers">1,504</div>
                <div class="cardName">Daily Views</div>
              </div>

              <div class="iconBx">
                <ion-icon name="eye-outline"></ion-icon>
              </div>
            </div>

            <div class="card">
              <div>
                <div class="numbers">80</div>
                <div class="cardName">Sales</div>
              </div>

              <div class="iconBx">
                <ion-icon name="cart-outline"></ion-icon>
              </div>
            </div>

            
          </div>

          {/* <!-- ================ Order Details List ================= --> */}
          <div class="details">
            <div class="recentOrders">
              <div class="cardHeader">
                <h2>Recent Orders</h2>
                <a href="#" class="btn">View All</a>
              </div>

              <table>
                <thead>
                  <tr>
                    <td>Name</td>
                    <td>Price</td>
                    <td>Payment</td>
                    <td>Status</td>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <td>Star Refrigerator</td>
                    <td>$1200</td>
                    <td>Paid</td>
                    <td><span class="status delivered">Delivered</span></td>
                  </tr>

                  <tr>
                    <td>Dell Laptop</td>
                    <td>$110</td>
                    <td>Due</td>
                    <td><span class="status pending">Pending</span></td>
                  </tr>

                  <tr>
                    <td>Apple Watch</td>
                    <td>$1200</td>
                    <td>Paid</td>
                    <td><span class="status return">Return</span></td>
                  </tr>

                  <tr>
                    <td>Addidas Shoes</td>
                    <td>$620</td>
                    <td>Due</td>
                    <td><span class="status inProgress">In Progress</span></td>
                  </tr>

                  <tr>
                    <td>Star Refrigerator</td>
                    <td>$1200</td>
                    <td>Paid</td>
                    <td><span class="status delivered">Delivered</span></td>
                  </tr>

                  <tr>
                    <td>Dell Laptop</td>
                    <td>$110</td>
                    <td>Due</td>
                    <td><span class="status pending">Pending</span></td>
                  </tr>

                  <tr>
                    <td>Apple Watch</td>
                    <td>$1200</td>
                    <td>Paid</td>
                    <td><span class="status return">Return</span></td>
                  </tr>

                  <tr>
                    <td>Addidas Shoes</td>
                    <td>$620</td>
                    <td>Due</td>
                    <td><span class="status inProgress">In Progress</span></td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* <!-- ================= New Customers ================ --> */}
            <div class="recentCustomers">
              <div class="cardHeader">
                <h2>Recent Customers</h2>
              </div>

              <table>
                <tr>
                  <td width="60px">
                    <div class="imgBx"><img src={customer02} alt=""/></div>
                  </td>
                  <td>
                    <h4>David <br/> <span>Italy</span></h4>
                  </td>
                </tr>

                <tr>
                  <td width="60px">
                    <div class="imgBx"><img src={customer01} alt=""/></div>
                  </td>
                  <td>
                    <h4>Amit <br/> <span>India</span></h4>
                  </td>
                </tr>

                <tr>
                  <td width="60px">
                    <div class="imgBx"><img src={customer02} alt=""/></div>
                  </td>
                  <td>
                    <h4>David <br/> <span>Italy</span></h4>
                  </td>
                </tr>

                <tr>
                  <td width="60px">
                    <div class="imgBx"><img src={customer01} alt=""/></div>
                  </td>
                  <td>
                    <h4>Amit <br/> <span>India</span></h4>
                  </td>
                </tr>

                <tr>
                  <td width="60px">
                    <div class="imgBx"><img src={customer02} alt=""/></div>
                  </td>
                  <td>
                    <h4>David <br/> <span>Italy</span></h4>
                  </td>
                </tr>

                <tr>
                  <td width="60px">
                    <div class="imgBx"><img src={customer01} alt=""/></div>
                  </td>
                  <td>
                    <h4>Amit <br/> <span>India</span></h4>
                  </td>
                </tr>

                <tr>
                  <td width="60px">
                    <div class="imgBx"><img src={customer01} alt=""/></div>
                  </td>
                  <td>
                    <h4>David <br/> <span>Italy</span></h4>
                  </td>
                </tr>

                <tr>
                  <td width="60px">
                    <div class="imgBx"><img src={customer02} alt=""/></div>
                  </td>
                  <td>
                    <h4>Amit <br/> <span>India</span></h4>
                  </td>
                </tr>
              </table>
            </div>
          </div>
        </div>
      </div>

     
    </>
  )
}

export default AdminDashboard