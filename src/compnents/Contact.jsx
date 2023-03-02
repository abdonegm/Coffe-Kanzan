import React from 'react';
import "./contact.css";
import map from "../images/google-maps-apparently-told-someone-to-drive-into-a-mango-tree-the-internet-goes-nuts-177726_1.jpg";

import {BiPhoneCall} from "react-icons/bi";
import {BsInstagram,BsWhatsapp} from "react-icons/bs";
import {FiFacebook,FiTwitter} from "react-icons/fi";
import image1 from "../images/Group 4233.png";
import image2 from "../images/Group 923.png";


const Contact = () => {
  return (
   <>
 
    
    <div>
        <div className='contact-head'> 
            <h1 className='mb-4'>تواصل معنا</h1>
            <p>كوب قهوة لذيذة خير ما نبدأ فيه حديثنا, تواصل معنا عبر</p>
        </div>
 
    <div className='contact-img '>
        <img src={map} alt="ff" />
    </div>
    </div>
    <div className='contact'>
    <div className='contact-heading container'>

    <div className='contact-type container'>
        <div className='email'>
            <h3 className='h4 mb-2'>اشترك في النشرة الاخبارية</h3>
            <p>ادخل البريد الالكتروني ليصلك عروضنا واخبارنا</p>
            <div className='email-info'>
            <p className='text-end mt-2' >البريد الالكتروني </p>
            <img src={image1} alt="email" />
            </div>
          
        </div>
        <div className='call'>
            <h3 className='h4' >اتصل بنا</h3>
            <p className='phone fs-5' ><span><img src={image2} alt="fd" /></span> 9200 XXXXX</p>
        </div>
        <div className='social'>
            <h3 className='h4 mb-2'>وسائل التواصل الاجتماعي</h3>
            <div className='social-icons'>
                <BsInstagram />
                <FiFacebook />
                <FiTwitter />
                <BsWhatsapp />
            </div>
        </div>
    </div>
   </div>
   </div>
   </>
  )
}

export default Contact