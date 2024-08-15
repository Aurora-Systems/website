import Link from "next/link";

export default function CustomSoftwareDevelopment() {
    return (
        <div className="min-vh-100 mt-3">
            <div className="mt-5">
                <div className="col-sm text-center">
                    <h1 className="display-2 fw-bold">Custom Software Development</h1>
                    <p>Every business is different, and off-the-shelf software may not always fit your specific requirements. Our bespoke software solutions are designed from the ground up, tailored to meet your unique business needs. We have the expertise to deliver.</p>
                    <Link href="/contact_us"><button className="btn p-btn">Get In Touch</button></Link>
                </div>
                <div className="rounded text-center mb-5">
                    <img src="https://ngratesc.sirv.com/website/Mac%20Studio.png" className="img-fluid w-75" alt="Bleu dashboard" />
                </div>
            </div>
            <div className="row d-flex align-items-center mb-5">
                <div className="col-sm">
                    <h1 className="display-1 fw-bold text-center">
                        Our Approach
                    </h1>
                    <p className="text-center ">
                        We believe in a collaborative approach to software development. Our process begins with a deep understanding of your business goals, challenges, and opportunities. We work closely with you to design and develop software that not only meets your current needs but is also adaptable for future growth.
                    </p>
                </div>
                <div className="col-sm ">
                    <img src="https://ngratesc.sirv.com/website/csd_sec.png" className="img-fluid rounded " alt="" />
                </div>
            </div>

            <div>
                <h1 className="fw-bold display-1 text-center">
                    SERVICES WE OFFER
                </h1>
                <div className="d-flex flex-column gap-3 mb-5">
                    <div className="col-sm border rounded p-2">

                        <h5>Bespoke Software Solutions</h5>
                        <p>Every business is different, and off-the-shelf software may not always fit your specific requirements. Our bespoke software solutions are designed from the ground up, tailored to meet your unique business needs.</p>
                    </div>
                    <div className="col-sm border rounded p-2">

                        <h5>Software Intergration</h5>
                        <p>Seamless integration is key to optimizing business processes. We specialize in integrating new software with your existing systems, ensuring a smooth transition with minimal disruption. Our integration services help unify your operations, providing you with a cohesive and efficient workflow.</p>
                    </div>
                    <div className="col-sm border rounded p-2">
                        <h5>Legacy System Modenization</h5>
                        <p>Outdated software can hinder your business growth. Our legacy system modernization services are designed to revitalize your existing software, enhancing its performance, security, and functionality. We help you transition to modern platforms, ensuring your business remains competitive in the digital age.</p>
                    </div>
                    <div className="col-sm border rounded p-2">
                        <h5>Cloud Based Solutions</h5>
                        <p>Embrace the power of the cloud with our custom cloud-based software solutions. We design and develop cloud applications that offer scalability, flexibility, and accessibility, allowing you to manage your business operations from anywhere in the world. Whether you need a private, public, or hybrid cloud solution, we've got you covered.</p>
                    </div>
                    <div className="col-sm border rounded p-2">
                        <h5>Support and Maintenance</h5>
                        <p>Our commitment to your success doesn’t end with the deployment of your software. We offer ongoing support and maintenance services to ensure your software continues to perform at its best. Our dedicated support team is always available to address any issues, provide updates, and implement enhancements as your business evolves.</p>
                    </div>

                </div>
            </div>
            <div className="row mb-5 mt-5">
            <h1 className="fw-bold display-1 text-center">
                        WHY CHOOSE US?
                    </h1>
                    <div className="text-center col-sm">
                    <img src="https://ngratesc.sirv.com/website/handshake.png" className="img-fluid  rounded " />

                </div>
                <div className="col-sm">
                   
                    <div>
                        <ul>
                            <li><b>Expertise Accross Industries:</b>  We have successfully delivered solutions across various industries, including finance, healthcare, retail, and more.</li>
                            <li><b>Agile Development Process:</b> Our agile methodology ensures that your software is developed efficiently and delivered on time, with the flexibility to make adjustments as your project progresses.</li>
                            <li><b>Client-Centric Approach:</b> Your satisfaction is our top priority. We work closely with you throughout the development process, ensuring that the final product aligns with your vision and exceeds your expectations.</li>
                            <li><b>Quality Assurance:</b> We adhere to strict quality standards, rigorously testing your software to ensure it is secure, reliable, and performs optimally under all conditions.</li>
                        </ul>
                    </div>

                </div>
                

            </div>
        </div>
    )
}