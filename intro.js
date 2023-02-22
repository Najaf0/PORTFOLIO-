import React from 'react'

function Intro() {
    return (
        <div>
            <section className='intro-sec'>
                <div className="hero">
                    <div className="hero__bg ">
                        <picture>
                            <img src="https://img.freepik.com/free-photo/white-wooden-wall-background_53876-89004.jpg?size=626&ext=jpg&uid=R62562197&ga=GA1.2.1231619069.1668452797&semt=ais" className="intro-img" alt="..." />
                        </picture>
                    </div>
                    <div className='intro-text'>
                        <p className="fs-1 intro-text-1">Website Designer & Developer</p>
                        <p className="fs-6 intro-text-2">I am A Website Developer from Paskistan.I enjoy buillding everything from small bussines sites to rich interactive web apps. If you are a bussiness seeking a web presence or an employer looking to hire, you can get in touch with me here.</p>
                        <button type="button" className="btn btn-02">Hire Me</button>
                    </div>
                    {/* <div className='icon-sec'>
                    <img src="https://img.icons8.com/material-outlined/256/github.png" className="rounded mx-auto d-block github-icon" alt="..."/>
                    </div> */}
                </div>
            </section>
        </div>
    )
}

export default Intro;
