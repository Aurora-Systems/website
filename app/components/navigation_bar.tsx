"use client"
import Link from 'next/link';
import page_links from './links';
import Image from "next/image"
import { useState } from 'react';
import { useRouter } from 'next/navigation';


export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const router = useRouter();

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

    const closeNavbar = () => {
        setIsOpen(false);
    };

    const handleNavigation = (url:string) => {
        router.push(url);
        closeNavbar();
    };

    return (
        <nav className="bg-white rounded mt-3 z-1 navbar navbar-expand-lg bg-white position-sticky top-0 pt-3 w-100 ">
            <div className="container">
                <Link href="/" onClick={closeNavbar}><h5 className="mt-1 me-3" >Aurora</h5></Link>
                <button className="navbar-toggler bg-white border-0" type="button" onClick={toggleNavbar}>
                    <i className="bi bi-list text-primary"></i>
                </button>
                
                <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`}>
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link" href={page_links.home} onClick={closeNavbar}>Home</Link> 
                        </li>
                        <li className='nav-item'>
                        
                            <div className='dropdown'>
                                <button type="button" className='bg-white btn-none border-0 ms-0 nav-link' data-bs-toggle="dropdown" aria-expanded="false">Services <i className="bi bi-chevron-down"></i></button>
                                <ul className='dropdown-menu'>
                                    <li className='pointer'>
                                        <a className='dropdown-item' onClick={() => handleNavigation(page_links.services.custom_dev)}>Custom Software Development</a>
                                    </li>
                                    <li  className='pointer'>
                                        <a className='dropdown-item' onClick={() => handleNavigation(page_links.services.ux)}>User Interface Design UI | UX</a>
                                    </li>
                                    <li  className='pointer'>
                                        <a className='dropdown-item' onClick={() => handleNavigation(page_links.services.mobile_dev)}>Mobile App Development</a>
                                    </li>
                                    <li  className='pointer'>
                                        <a className='dropdown-item' onClick={() => handleNavigation(page_links.services.ai)}>AI and Automation</a>
                                    </li>
                                    <li  className='pointer'>
                                        <a className='dropdown-item' onClick={() => handleNavigation(page_links.services.web_dev)}>Web Development</a>
                                    </li>
                                    <li  className='pointer'>
                                        <a className='dropdown-item' onClick={() => handleNavigation(page_links.services.idea_validation)}>Idea Validation</a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" href={page_links.roadmap} onClick={closeNavbar}>Roadmap</Link> 
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" href={page_links.portfolio} onClick={closeNavbar}>Portfolio</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" href={page_links.careers} onClick={closeNavbar}>Careers</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" href={page_links.blog} onClick={closeNavbar}>Blog</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" href={page_links.contact} onClick={closeNavbar}>Contact Us</Link>
                        </li>
                    </ul>
                    <Link href={page_links.contact} onClick={closeNavbar}><button className="btn p-btn rounded w-sm-100">Ready To Build?</button></Link>
                </div>
            </div>
        </nav>
    );
};


export const Footer=()=>{
    return(
        <div>

        <div className='row bg-white gap-2 text-dark p-2 vw-100'>
              <div className='col-sm  col col-sm'>
                <div>
                    <h6 className='mb-3'>Contact Details</h6>
                </div>
                <p><i className="bi bi-envelope me-2 "></i><Link href="mailto:support@aurorasystems.co.zw:">support@aurorasystems.co.zw</Link></p>
                <p><i className="bi bi-telephone me-2"></i><Link href="tel:+263780040000">+263 78 004 0000</Link></p>
                <p><i className="bi bi-telephone me-2"></i><Link href="tel:+1 (629) 276-5611">+1 (629) 276-5611</Link></p>
                <div className='d-flex f flex-row gap-3'>
                <p><Link href="https://www.linkedin.com/company/aurorazw" target="_blank" ><i className="bi bi-linkedin me-2" ></i></Link></p>
                <p><Link href="https://www.facebook.com/AuroraSystemsAfrica/" target="_blank" ><i className="bi bi-facebook me-2" ></i></Link></p>
                <p><Link href="https://www.instagram.com/aurorasystems_/" target="_blank" ><i className="bi bi-instagram me-2" ></i></Link></p>
                <p><Link href="https://x.com/AuroraSystemsZW" target="_blank" ><i className="bi bi-twitter-x me-2" ></i></Link></p>
                <p><Link href="https://wa.me/263780040000" target="_blank" ><i className="bi bi-whatsapp me-2" ></i></Link></p>
                <p><Link href="https://aurorasystems.substack.com" target="_blank" ><i className="bi bi-substack me-2" ></i></Link></p>


                </div>
                

            </div>
             <div className='col-sm  col col-sm'>
                <div>
                    <h6 className='mb-3'>Location</h6>
                </div>
                <p><i className="bi bi-geo-alt me-2"></i>1111B S Governors Ave <br/><span className='ms-4'> STE 37386, Dover</span><br/><span className='ms-4'>Delaware</span><br/><span className='ms-4'>United States of America</span></p>
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
            <div className="col-sm col-md-1" >
                <div className='mb-3'>
                    <h6>Pages</h6>
                </div>
                <p><Link href={page_links.roadmap}>Roadmap</Link></p>
                <p><Link href={page_links.portfolio}>Porfolio</Link></p>
                <p><Link href={page_links.careers}>Careers</Link></p>
                <p><Link href={page_links.blog}>Blog</Link></p>
                <p><Link href={page_links.contact}>Contact us</Link></p>
            </div>
            <div className="col-sm text-center">
               
                    <Image src="https://ngratesc.sirv.com/website/aurora_logo.png" width={30} height={25} className='img-fluid' alt="Aurora logo"/>
                    <h6>Aurora</h6>
                
                <iframe src="https://aurorasystems.substack.com/embed"  ></iframe>
            </div>
        </div>
        <div className='text-center bg-black text-white p-2'>
            <span>Aurora Systems is a subsidiary of <a href="https://attributeai.xyz">Attribute Ai, LLC</a></span>
        </div>
                </div>
    )
}