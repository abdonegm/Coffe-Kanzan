import React from 'react';
import "./blog.css";
import image1 from "../images/blog1.png";
import arrow from "../images/Group 845.png";


const Blog = () => {
  return (
    <>
    <div className='blog'   data-aos="zoom-in-up">
        <div className='container'>
            <div className='blog-heading'>
               <div>
                <h1 className='mb-4'>المدونة</h1>
                <p>هذا النص يمكن استبداله بنص اخر بديل من معجم اللغة العربية هذا النص يمكن استبداله بنص اخر بديل<br/> من معجم اللغة العربية</p>
                </div>
            </div>
            <div className='blog-content'>
            <div className='blog-detail'>
                    <div className='blog-img'>
                        <img src={image1} alt='df' />


                        <div className='blog-title'>
                          <div> <p className='pt-3'>فهم تخصصات القهوة</p></div>

                        </div>
                    </div>
                    <div className='blog-info'>
                       <div className='hist'>
                        <p className='ms-4'>نشر في15نوفمبر2021</p>
                        <p>|</p>
                        <p className='me-4'>بواسطة احمد</p>
                       </div>
                    <h3 className='h5'>هذا النص يمكن استبداله بنص اخر بديل من معجم اللغة العربية</h3>
                    <p className='para'>هذا النص يمكن استبداله بنص اخر بديل من معجم اللغة العربية هذا النص يمكن استبداله بنص اخر بديل من معجم اللغة العربية هذا النص يمكن استبداله بنص اخر بديل من معجم اللغة العربية</p>

                    </div>
                    
                </div>

                <div className='blog-detail'>
                    <div className='blog-img'>
                        <img src={image1} alt='df' />


                        <div className='blog-title'>
                          <div> <p className='pt-3'>فهم تخصصات القهوة</p></div>

                        </div>
                    </div>
                    <div className='blog-info'>
                       <div className='hist'>
                        <p className='ms-4'>نشر في15نوفمبر2021</p>
                        <p>|</p>
                        <p className='me-4'>بواسطة احمد</p>
                       </div>
                    <h3 className='h5'>هذا النص يمكن استبداله بنص اخر بديل من معجم اللغة العربية</h3>
                    <p className='para'>هذا النص يمكن استبداله بنص اخر بديل من معجم اللغة العربية هذا النص يمكن استبداله بنص اخر بديل من معجم اللغة العربية هذا النص يمكن استبداله بنص اخر بديل من معجم اللغة العربية</p>

                    </div>
                    
                </div>
               
                <div className='blog-detail'>
                    <div className='blog-img'>
                        <img src={image1} alt='df' />


                        <div className='blog-title'>
                          <div> <p className='pt-3'>فهم تخصصات القهوة</p></div>

                        </div>
                    </div>
                    <div className='blog-info'>
                       <div className='hist'>
                        <p className='ms-4'>نشر في15نوفمبر2021</p>
                        <p>|</p>
                        <p className='me-4'>بواسطة احمد</p>
                       </div>
                    <h3 className='h5'>هذا النص يمكن استبداله بنص اخر بديل من معجم اللغة العربية</h3>
                    <p className='para'>هذا النص يمكن استبداله بنص اخر بديل من معجم اللغة العربية هذا النص يمكن استبداله بنص اخر بديل من معجم اللغة العربية هذا النص يمكن استبداله بنص اخر بديل من معجم اللغة العربية</p>

                    </div>
                    
                </div>





            </div>
            <div className='know'>
  <p className='contct mt-4'>عرض الكل<span className='me-2'><img src={arrow} alt="arrow"/></span></p>

  </div>
        </div>
    </div>
    </>
  )
}

export default Blog