import React from 'react';
import "./store.css";
import image1 from "../images/1.png";
import image2 from "../images/2.png";
import image3 from "../images/3.png";
import image4 from "../images/cup-coffee-with-cream-coffee-beans-chocolate-spices-dark-wooden-table-world-coffee-day.png";
import {AiOutlineShoppingCart} from "react-icons/ai";
import arrow from "../images/Group 845.png";

const Store = () => {
  return (
  <>
  <div className='store'>
    <div className='container store-content'>

        <div className='store-heading'>
            <div>
            <h2 className='mb-3'>متجر كنزان</h2>
            <p>انتقل إلى عالمك الخاص، إلى رائحة منزلك، إلى ضيافتك وطموحاتك، إلى التخيلات العميقة لمستقبلك، إلى الروح التي تنتمي بأصلبها<br/> للطبيعة ، وحبة البن الذهبية</p>
            </div>
        </div>
        <div className='store-types' data-aos="flip-left">
            <ul>
                <li className='first'><div className='store-page '><span className='ms-2'><img src={image1} alt="type" /></span><p className='mt-3'>التحميص</p></div></li>
                <li><div className='store-page '><div className='ms-2 '><img src={image1} alt="type" /></div><p className='mt-3'>القهوة</p></div></li>
                <li><div className='store-page'><div className='ms-2'><img src={image2} alt="type" /></div><p className='mt-3'>مطاحن القهوة</p></div></li>
                <li><div className='store-page'><div className='ms-2'><img src={image3} alt="type" /></div><p className='mt-3'>معدات الاسبريسو</p></div></li>
                <li><div className='store-page'><div className='ms-2'><img src={image2} alt="type" /></div><p className='mt-3'>معدات القهوة</p></div></li>
                <li><div className='store-page'><div className='ms-2'><img src={image1} alt="type" /></div><p className='mt-3'>مستلزمات القهوة</p></div></li>
                
            </ul>
        </div>

        <div className='store-cards' v data-aos="fade-up">
        <div class="card">
           <img src={image4} alt="cup" />
          <div className='card-content'>
          <p className='text-black-50 mt-3  h5'>قهوة مختصة مختلطة الأصل</p>
            <p className='mt-2 mb-4 fw-bold'>15ر.س</p>
          </div>
          <div>
          <p className='fw-bold text-center  pt-2 add'><AiOutlineShoppingCart/>  اضف الى العربة</p>
          </div>
        </div>

        <div class="card">
           <img src={image4} alt="cup" />
          <div className='card-content'>
          <p className='text-black-50 mt-3  h5'>قهوة مختصة مختلطة الأصل</p>
            <p className='mt-2 mb-4 fw-bold'>15ر.س</p>
          </div>
          <div>
          <p className='fw-bold text-center  pt-2 add'><AiOutlineShoppingCart/>  اضف الى العربة</p>
          </div>
        </div>
        <div class="card">
           <img src={image4} alt="cup" />
          <div className='card-content'>
          <p className='text-black-50 mt-3  h5'>قهوة مختصة مختلطة الأصل</p>
            <p className='mt-2 mb-4 fw-bold'>15ر.س</p>
          </div>
          <div>
          <p className='fw-bold text-center  pt-2 add'><AiOutlineShoppingCart/>  اضف الى العربة</p>
          </div>
        </div>
        <div class="card">
           <img src={image4} alt="cup" />
          <div className='card-content'>
          <p className='text-black-50 mt-3  h5'>قهوة مختصة مختلطة الأصل</p>
            <p className='mt-2 mb-4 fw-bold'>15ر.س</p>
          </div>
          <div>
            <p className='fw-bold text-center  pt-2 add'><AiOutlineShoppingCart/>  اضف الى العربة</p>
          </div>
        </div>

    </div>
    <div className='know'>
  <p className='contct mt-4'>أعرف المزيد<span className='me-2'><img src={arrow} alt="arrow"/></span></p>

  </div>
  </div>
 
  </div>
  </>
  )
}

export default Store;
