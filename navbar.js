import React from 'react'

function Navbar() {
    return (
        <div>
            <section className='navbar-sec'>
            {/* <!-- Navbar --> */}
            <nav className="navbar navbar-expand-lg navbar-light navbar-nav">
                {/* <!-- Container wrapper --> */}
                <div className="container-fluid">
                    {/* <!-- Toggle button --> */}
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-mdb-toggle="collapse"
                        data-mdb-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <i className="fas fa-bars"></i>
                    </button>

                    {/* <!-- Collapsible wrapper --> */}
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        {/* <!-- Navbar brand --> */}
                        <a className="navbar-brand mt-2 mt-lg-0" href="#">
                            <p className="fs-2 logo">Aaina Najaf</p>
                        </a>
                        {/* <!-- Left links --> */}
                        <ul className="navbar-nav me-auto mb-2">
                            <li className="nav-item">
                                <a className="nav-link nav-a" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link nav-a" href="#">Services</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link nav-a" href="#">Experience</a>
                            </li>
                            <li>
                                <a className='nav-link nav-a' href='#'>Portfolio</a>
                            </li>
                        </ul>
                        {/* <!-- Left links --> */}
                    </div>
                    {/* <!-- Collapsible wrapper --> */}

                    {/* <!-- Right elements --> */}
                    <div className="d-flex align-items-center">
                        {/* <!-- Icon --> */}
                        <a className="text-reset me-3" href="#">
                            <i className="fas fa-shopping-cart"></i>
                        </a>

                        {/* <!-- Notifications --> */}
                        <div className="button">
                        <button type="button" className="btn btn-1">Contact</button>
                        </div>
                        {/* <!-- Avatar --> */}
                    </div>
                    {/* <!-- Right elements --> */}
                </div>
                {/* <!-- Container wrapper --> */}
            </nav>
            {/* <!-- Navbar --> */}
            </section>
        </div>
    )
}

export default Navbar;
