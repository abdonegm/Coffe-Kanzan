import React from 'react';
import images from "../images/Group 847.png";
import "./services.css";
import 'aos/dist/aos.css';

const Services = () => {
  return (
    <>
    <div className='services'>
        <div className='container service'>
            <div className='service-content' data-aos="fade-up">
             <h2>خدماتنا</h2>
             <p className='mt-3 text-black-50'>هذا النص يمكن استبداله بنص اخر بديل من معجم اللغة العربية هذا النص يمكن استبداله بنص اخر بديل من معجم اللغة العربية</p>
             <div className='product'>
                <h5>منتجات الشركات</h5>
                <p>كوب القهوة ليس محصولا جيد وتحميص متقن وصانع قهوة خبير وحسب، إن كان هذا مجمل الصورة المتقنة لديك، فدعنا ندعوك لتجربة شاملة.. كريمة وبسيطة لم ترها خارج كنزان ، حالة فريدة، حالة خاصة تصل إلى كمال الإتقان</p>
             </div>
             <p className='persons mt-4'>منتجات الافراد</p>
            </div>
            <div className='service-image' data-aos="fade-up">
                <img src={images} alt="sservicse" />
            </div>

        </div>
    </div>
    
    </>
  )
}

export default Services
