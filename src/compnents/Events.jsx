import React from 'react';
import image1 from "../images/KANZAN_Insta-021-2-2048x2048.png";
import "./events.css";
import arrow from "../images/Group 845.png";
import image2 from "../images/Capture.PNG";
import image3 from "../images/Group 1076.png";


const Events = () => {
  return (
   <>
      <div className='events'>
        <div className='container event-cont'>
            <div className='event-left  '  data-aos="fade-left" >
            <div class="card">
           <img src={image1} alt="cup" className='coffe'/>
          <div className='card-content'>
          <p className='text-black-50 mt-3 bg-white h5 me-3'>تجربة شاي الضحى</p>
            <p className='mt-2 mb-5 me-3 fw-bold'><span className='text-black-50 fs-7'>يبدأ من:</span>60س ر غ</p>
          </div>
          <div className='comm'>
          <p className='fw-bold text-center border-top pt-3 pb-3 pb-2 add bg-white'><span><img src={image3} alt="d"/></span> احجز معنا الان</p>
          
          </div>
        </div>
            </div>
            <div className='event-right'data-aos="fade-right">
                <h1 className='mb-4'>الفعاليات القادمة</h1>
                <p className='mb-3 text-black-50'>نغمس مزاجنـا في كوب شاي، لفكرة لاتغادر البال أبدًا بصحبة من تحبون نستضيفكم<br/> مع توليفة لرحلة تثقيفية عن الشاي المختص وصنع أكوابكم متقنة المزاج ومشاركتنـا<br/> بأجود خيارات المخبوزات من كنزان</p>
                <p className='contct mt-4'>أعرف المزيد<span className='me-1'><img src={arrow} alt="arrow"/></span></p>
            </div>
        </div>
        <div className='capture'>
              <img src={image2} alt="cap" />
        </div>
      </div>
   </>
  )
}

export default Events