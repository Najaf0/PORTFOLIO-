import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import Dessert from '../assets/dessert.png';
import Email from '../assets/email.png';
import Calculator from '../assets/calculator.png';
import Email2 from '../assets/email2.png';
import Fashion from '../assets/Fashion.png';
import Footer from '../assets/footer.png';
import Form from '../assets/form.png';
import Student from '../assets/student.png';
import Uni from '../assets/uni.png';
import Ecommerce from '../assets/ecommerce.png';
import Travel from '../assets/travel.png';
// import 'swiper/css';

function Portfolio() {
    return (
        <section className='port-sec'>
            <div>
                <div className='port-heading'>
                    <p className="fs-1 port-txt-1">Recent Projects</p>
                    <p className="fs-1 port-txt">Portfolio</p>
                </div>

                <Swiper>
                    <SwiperSlide>
                        <img src={Dessert} className="rounded port-img1" alt="..." />
                        <p class="fs-4 port-txt-2">FrontEnd Travel WEbsite</p>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={Email} className="rounded port-img2" alt="..." />
                        <img src={Email2} className="rounded port-img2" alt="..." />
                        <p class="fs-4 port-txt-2">Email Signature</p>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={Calculator} className="rounded port-img4" alt="..." />
                        <p class="fs-4 port-txt-2">Simple Calculator in JavaScript</p>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={Fashion} className="rounded port-img5" alt="..." />
                        <p class="fs-4 port-txt-2">FrontEnd Fashion WEbsite</p>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={Footer} className="rounded port-img6" alt="..." />
                        <p class="fs-4 port-txt-2">FrontEnd Footer Design</p>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={Form} className="rounded port-img7" alt="..." />
                        <p class="fs-4 port-txt-2">FrontEnd Registration Form</p>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={Student} className="rounded port-img8" alt="..." />
                        <p class="fs-4 port-txt-2">FrontEnd Student Form</p>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={Uni} className="rounded port-img9" alt="..." />
                        <p class="fs-4 port-txt-2">FrontEnd UNiversity WEbsite</p>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={Ecommerce} className="rounded port-img10" alt="..." />
                        <p class="fs-4 port-txt-3">FrontEnd E-Commerce WEbsite in React JS</p>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={Travel} className="rounded port-img11" alt="..." />
                        <p class="fs-4 port-txt-3">FrontEnd Travel WEbsite in React jS</p>
                    </SwiperSlide>
                </Swiper>
            </div>
        </section>
    )
}

export default Portfolio;
