import React from 'react';
import logo from "../images/Kanzan_Logo 2(1).png";
import "./navbar.css";
import {RiEnglishInput} from "react-icons/ri";
import {AiOutlineShopping} from "react-icons/ai";
import {BsFillPersonFill} from "react-icons/bs"

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className='container'>
            <div className='content'>
    
       <div className='logo'>
        <img src={logo} alt="logo" />

       </div>
       <div className='links'>
         <ul>
            <li className='active'>الرئيسية</li>
            <li>عن&nbsp;كنزان</li>
            <li>خدماتنا</li>
            <li>متجر&nbsp;كنزان</li>
            <li>الفعاليات</li>
            <li>الدورات&nbsp;التدريبية</li>
            <li>الاشتراكات</li>
            <li>المدونة</li>

         </ul>
         <div className='line'>|</div>
         <div className='contact'>
        
          <RiEnglishInput className='lang'/>
          <AiOutlineShopping />
          <BsFillPersonFill />
       </div>
       </div>
       
      </div>
      </div>
    </div>
  )
}

export default Navbar
