import React from 'react';
import Resume from './Resume.pdf';

function Services() {
    return (
        <div>
            <section className='service-sec'>
                <div className="container text-center">
                    <div className="row">
                        <div className="col-1">
                            <div className="text-center">
                                <p className="fs-4 col-txt">Developer</p>
                                <img src="https://img.freepik.com/free-photo/transportation-map-planning-meeting-team_53876-15329.jpg?size=626&ext=jpg&uid=R62562197&ga=GA1.1.1231619069.1668452797&semt=ais" className="rounded col-img" alt="..." />
                                <button type="button" className="btn btn-link link-btn">Learn More</button>
                            </div>
                        </div>
                        <div className="col-2">
                            <div className="text-center">
                                <p className="fs-4 col-txt">Design</p>
                                <img src="https://img.freepik.com/free-photo/customers-checking-out-shop_53876-15331.jpg?size=626&ext=jpg&uid=R62562197&ga=GA1.1.1231619069.1668452797&semt=ais" className="rounded col-img1" alt="..." />
                                <button type="button" className="btn btn-link link-btn">Learn More</button>
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="text-center">
                                <p className="fs-4 col-txt">BlockChain</p>
                                <img src="https://img.freepik.com/premium-photo/two-young-designers-are-working-new-project-night-office-using-modern-technology_530697-21129.jpg?size=626&ext=jpg&uid=R62562197&ga=GA1.1.1231619069.1668452797&semt=ais" className="rounded col-img" alt="..." />
                                <button type="button" className="btn btn-link link-btn">Learn More</button>
                            </div>
                        </div>
                        <div className='services-text'>
                            <p className="fs-1 ser-txt-1">My <span>Services</span></p>
                            <p className="fs-6 ser-txt-2">I am A Website Developer from Paskistan.I enjoy buillding everything from small bussines sites to rich interactive web apps. If you are a bussiness seeking a web presence or an employer looking to hire, you can get in touch with me here.</p>
                            <a href={Resume} download><button type="button" className="btn btn-03">Download CV</button></a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Services;
