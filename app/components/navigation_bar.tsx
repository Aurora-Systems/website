"use client"
import Link from 'next/link';
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
                            <Link className="nav-link" href="#">Services</Link>
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
