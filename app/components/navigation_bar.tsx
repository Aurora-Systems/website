"use client"
import Link from 'next/link';
import Image from "next/image"
import { useState } from 'react';

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="bg-white z-1 navbar navbar-expand-lg bg-white position-sticky top-0 pt-3 w-100 ">
            <div className="container">
                <h5 className="mt-1 me-3" >Aurora</h5>
                <button className="navbar-toggler bg-white border-0" type="button" onClick={toggleNavbar}>
                    <i className="bi bi-list text-primary"></i>
                </button>
                <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`}>
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <div className='dropdown'>
                                <button className='dropdown-toggle'>Services <i className="bi bi-chevron-down"></i></button>
                            <ul className='dropdown-menu'>
                                <li>
                                    <Link href="">Web Development</Link>
                                </li>
                                <li>
                                    <Link href="">User Interface Design UI| UX</Link>
                                </li>
                                <li>
                                    <Link href=""></Link>
                                </li>
                                <li>
                                    <Link href=""></Link>
                                </li>
                            </ul>
                            </div>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" href="#">Roadmap</Link> 
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" href="#">Portfolio</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" href="#">Careers</Link>
                        </li>
                    </ul>
                    <Link href="/support"><button className="btn p-btn rounded w-sm-100">Ready To Build?</button></Link>
                </div>
            </div>
        </nav>
    );
};


export const Footer=()=>{
    return(
        <div className='row'>
            <div className='col-sm'>
                <div>
                    <h6 className='mb-3'>Contact Details</h6>
                </div>
                <p><i className="bi bi-envelope me-2"></i>support@aurorasystems.co.zw</p>
                <p><i className="bi bi-telephone me-2"></i>+263 78 898 4320</p>
                <p><i className="bi bi-geo-alt me-2"></i>258 Smuts Rd<br/><span className='ms-4'>Waterfalls</span><br/><span className='ms-4'>Harare</span><br/><span className='ms-4'>Zimbabwe</span></p>
            </div>
            <div className="col-sm">
                <div className='mb-3'>
                    <h6 >Services</h6>
                </div>
                <p><Link href="/services/web_dev">Web Development</Link></p>
                <p><Link href="/services/ux_design">User Interface design | UI/UX</Link></p>
                <p><Link href="/services/mobile_dev">Mobile App Development</Link></p>
                <p><Link href="/services/project_management">Project Mnagement</Link></p>
                <p><Link href="/services/custom_software_dev">Custom Software Development</Link></p>
            </div>
            <div className="col-sm">
                <div className='mb-3'>
                    <h6>Pages</h6>
                </div>
                <p><Link href="/roadmap">Roadmap</Link></p>
                <p><Link href="/portfolio">Porfolio</Link></p>
                <p><Link href="/careers">Careers</Link></p>
                <p><Link href="/contact_us">Contact us</Link></p>
                <p><Link href="/legal">Legal</Link></p>
            </div>
            <div className="col-sm">
                <div className="d-flex flex-row mb-3">
                    <Image src="https://ngratesc.sirv.com/website/aurora_logo.png" width={20} height={20} alt="Aurora logo"/>
                    <h6>Aurora</h6>
                </div>
                <div>
                    <form >
                        <p>Signup for our weekly newsletter</p>
                        <Link target='_blank' href="https://substack.com/@aurorasystems?utm_source=edit-profile-page"><button type="submit" className='btn w-100 p-btn'>Sign Up</button></Link>
                    </form>
                </div>
            </div>
        </div>
    )
}