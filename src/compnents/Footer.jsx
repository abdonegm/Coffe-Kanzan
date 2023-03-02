import React from 'react';
import "./footer.css";
import logo from "../images/Kanzan_Logo 2(1).png";
import image1 from "../images/Group 928.png";
import image2 from "../images/Group 929.png";
const Footer = () => {
  return (
   <>
   <div className='footer'>
    <div className='footer-head'>
        <img src={logo} alt="asd" className='mb-3'/>
        <p>بنَفس اليدِ المعطاءة التي ترعرعنا بواحات أحسائنا ، وتنفّسنا مجرَى ينبوعها، وألِفت أعييننا سعف نخلِها، <br/>ومُدَّت بأرواحنا تَجرُّدها من كلِّ نتوءات خارجية، كَبرنا بِرعاها، بخريرٍ مائها، برویية وھَناء..</p>

    </div>
    <div className='footer-links'>
    <ul>
      <li><p>الرئيسية</p></li>
      <li><p>عن كنزان</p></li>
      <li><p>خدماتنا</p></li> 
          <li><p>متجر كنزان</p></li>
          <li><p>الدورات التدريبية</p></li>
          <li><p>المدونة</p></li>
          <li><p>الاشتراكات</p></li>

       
    </ul>
    </div>
    <div className='right-side'>
    <img src={image1} alt="d"/>
    </div>
    <div className='left-side'>
    <img src={image2} alt="d"/>
    </div>
   </div>
   </>
  )
}

export default Footer