"use client"
import Link from 'next/link';
import page_links from './links';
import Image from "next/image"
import { useState } from 'react';

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="bg-white rounded mt-3 z-1 navbar navbar-expand-lg bg-white position-sticky top-0 pt-3 w-100 ">
            <div className="container">
                <Link href="/"><h5 className="mt-1 me-3" >Aurora</h5></Link>
                <button className="navbar-toggler bg-white border-0" type="button" onClick={toggleNavbar}>
                    <i className="bi bi-list text-primary"></i>
                </button>
                
                <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`}>
               
                            
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                       <li className='nav-item'>
                    <div className='dropdown '>
                                <button type="button" className='bg-white btn-none border-0 ms-0 nav-link' data-bs-toggle="dropdown" aria-expanded="false">Services <i className="bi bi-chevron-down"></i></button>
                               
                                <ul className='dropdown-menu '>
                               
                                <li>
                                        <Link className='dropdown-item' href={page_links.services.custom_dev}>Custom Software Development</Link>
                                    </li>
                                    <li>
                                        <Link className='dropdown-item' href={page_links.services.ux}>User Interface Design UI | UX</Link>
                                    </li>
                                    <li>
                                        <Link className='dropdown-item' href={page_links.services.mobile_dev}>Mobile App Development</Link>
                                    </li>
                                    
                                    <li>
                                        <Link className='dropdown-item' href={page_links.services.ai}>AI and Automation</Link>
                                    </li>
                                    <li>
                                        <Link className='dropdown-item' href={page_links.services.web_dev}>Web Development</Link>
                                    </li>
                                    <li>
                                        <Link className='dropdown-item' href={page_links.services.idea_validation}>Idea Validation</Link>
                                    </li>
                                   
                                   
                                </ul>
                            </div>
                            </li>
                       
                        <li className="nav-item">
                            <Link className="nav-link" href={page_links.roadmap}>Roadmap</Link> 
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" href={page_links.portfolio}>Portfolio</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" href={page_links.careers}>Careers</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" href={page_links.blog}>Blog</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" href={page_links.contact}>Contact Us</Link>
                        </li>
                        
                    </ul>
                    <Link href={page_links.contact}><button className="btn p-btn rounded w-sm-100">Ready To Build?</button></Link>
                </div>
            </div>
        </nav>
    );
};


export const Footer=()=>{
    return(
        <div className='row bg-white text-dark p-3'>
            <div className='col-sm'>
                <div>
                    <h6 className='mb-3'>Contact Details</h6>
                </div>
                <p><i className="bi bi-envelope me-2"></i>support@aurorasystems.co.zw</p>
                <p><i className="bi bi-telephone me-2"></i>+263 78 004 0000</p>
                <p><i className="bi bi-geo-alt me-2"></i>258 Smuts Rd<br/><span className='ms-4'>Waterfalls</span><br/><span className='ms-4'>Harare</span><br/><span className='ms-4'>Zimbabwe</span></p>
            </div>
            <div className="col-sm">
                <div className='mb-3'>
                    <h6 >Services</h6>
                </div>
                <p><Link href={page_links.services.ai}>AI and Automation</Link></p>
                <p><Link href={page_links.services.web_dev}>Web Development</Link></p>
                <p><Link href={page_links.services.ux}>User Interface design | UI/UX</Link></p>
                <p><Link href={page_links.services.mobile_dev}>Mobile App Development</Link></p>
                <p><Link href={page_links.services.custom_dev}>Custom Software Development</Link></p>
            </div>
            <div className="col-sm">
                <div className='mb-3'>
                    <h6>Pages</h6>
                </div>
                <p><Link href={page_links.roadmap}>Roadmap</Link></p>
                <p><Link href={page_links.portfolio}>Porfolio</Link></p>
                <p><Link href={page_links.careers}>Careers</Link></p>
                <p><Link href={page_links.contact}>Contact us</Link></p>
                <p><Link href={page_links.legal}>Legal</Link></p>
            </div>
            <div className="col-sm text-center">
               
                    <Image src="https://ngratesc.sirv.com/website/aurora_logo.png" width={30} height={25} className='img-fluid' alt="Aurora logo"/>
                    <h6>Aurora</h6>
                
                <iframe src="https://aurorasystems.substack.com/embed" frameBorder="0" scrolling="no"></iframe>
            </div>
        </div>
    )
}