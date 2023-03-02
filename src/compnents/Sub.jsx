
import React from 'react';
import image from "../images/Group 839.png";
import "./course.css";
import "./sub.css"

import arrow from "../images/Group 845.png";
import image1 from "../images/Group 839.png";


const Sub = () => {
  return (
    <>
     <div className=' sub'  data-aos="fade-up-left">
        <div className='container courses-cont sub-cont'>
          
            <div className='courses-right sub-right'>
                <h1 className='mb-3'>اشتراكات القهوة</h1>
                <p className='test'>
                في كنزان، تأتيا حبة البن بأصل واحد من الطبية، من أرض تملك خصائص منشئها تختلف بإختلاف حاملها، وإلى متذوقها، بعضها لاذع مُر، وأخرى مرهف حلو، إلى سلسل ومعقّد، نجذّر من خلال التذوق لدينا هدف يميز                </p>
                <p className='contct'>اعرف المزيد<span className='me-2'><img src={arrow} alt="arrow"/></span></p>
            </div>
       
        
        </div>
        <img src={image1} alt="coverr" className='img-cover'/>
     </div>
    </>
  )
}

export default Sub
