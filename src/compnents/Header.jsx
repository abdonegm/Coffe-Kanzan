import React from 'react';
import "./header.css";
import 'aos/dist/aos.css';
import arrow from "../images/Group 845.png";

const Header = () => {
  return (
    <>
    <div className='header' data-aos="fade-down"
>
        <div className='container cont mb-5'>
            <div className='heading'>
                
            <h1 className='mb-3'>مجتمع كنزان</h1>
                <p className='mb-3 text-black-50'> فى كنزان,نحاكى الإختلافات المتقدمة.نلبى الطبقات الأتيةإلينا<br/>للتذوق للتجربة </p>
                <p className='contct'>تواصل معنا <span className='me-1'><img src={arrow} alt="arrow"/></span></p>
            </div>
        
        </div>

    </div>

    </>
  )
}

export default Header
