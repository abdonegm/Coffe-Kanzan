import React from 'react';
import image from "../images/top-view-coffee-cup-with-chemex-book.png";
import "./course.css";
import {MdStickyNote2} from "react-icons/md";
import arrow from "../images/Group 845.png";
import image2 from "../images/Group 892.png";
import image3 from "../images/Group 876.png";
import image4 from "../images/Group 877.png"


const Courses = () => {
  return (
    <>
     <div className='courses'>
        <div className='container courses-cont'>
            <div className='courses-right' data-aos="flip-right" >
                <h1 className='mb-5'>الدورات التدريبية</h1>
                <p>
                أتينا لبوّابة كنزان ، محمّلين بالرُّوح الأحسائية ، المُخضرمة بسنين من المعَاوِل والتنقُّل والفَخر، لنقدّم لأجيالنا الطَّموحَة، الدعم المتكامل لتثقيفه، ولتلقين درسه ، حاملين قصّة الشَّرق الحيّ في قلوبنا، القصة الأصيلة كما خُلِقت ، عبر أكاديمية قهوة مُتخصّصة بالتجربة النَّوعية الخلاّقة، قاصدين منها مُجتمعنا السُّعودي الشُّغوف بالصّنعة المحلية ، الطَّموح لتوثيق تجربته من الخطوة الأولى، وإلى إحتراف ذائقته، وصولا إلى المنشآت المختصة بالتدريب ، حيث نوفر كامل إحتياجاته، تحت سفح .كنزان السخي
                </p>
                <p className='contct mt-4'>أعرف المزيد<span className='me-2'><img src={arrow} alt="arrow"/></span></p>
            </div>
            <div className='courses-left' data-aos="flip-left">
                <div className='card'>
                    <img src={image} alt="asd" />
                    <div className='mt-3 mb-2 fs-6'>الحبوب الخضراء</div>
                    <p className='text-black-50'>هذا النص يمكن استبداله بنص اخر بديل من معجم اللغة العربية هذا النص يمكن استبداله بنص اخر بديل</p>
                    <div className='price'>
                    <div>
                    <p className='by'>بواسطة أحمد</p>
                    </div>
                    <div>
                      <p className='fw-bold'>
                        15 ر.س
                      </p>
                    </div>
                    </div>
                    <div className='arow-left'>
                              <img src={image4} alt="arrow" />

                    </div>
                    <div className='arow-right'>
                    <img src={image3} alt="arrow" />

                    </div>
                  
                </div>
                <p className='fw-bold text-center border-top pt-3 pb-3  add'><span><img src={image2} alt="d" className='ms-1'/></span> ابدأ الان</p>

                
            </div>


        </div>
     </div>
    </>
  )
}

export default Courses
