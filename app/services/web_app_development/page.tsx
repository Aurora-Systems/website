import Link from "next/link";
import { image_cdn_url } from "../../components/links";

export default function WebDevelopment() {
    return (
        <div className="min-vh-100 mt-3">
            <div className="mt-5">
                <div className="col-sm text-center">
                    <h1 className="display-2 fw-bold">Web Development</h1>
                    <p>In today's digital-first world, a powerful online presence is essential for business success. Our web development services are designed to create robust, user-friendly, and visually stunning websites that engage your audience and drive conversions. Whether you need a simple landing page or a complex web application, we've got you covered.</p>
                    <Link href="/contact_us"><button className="btn p-btn">Get In Touch</button></Link>
                </div>
                <div className="rounded text-center mb-5">
                    <img src={`${image_cdn_url}aurora_lander.png`} className="img-fluid w-75" alt="Web development concept" />
                </div>
            </div>
            <div className="row d-flex align-items-center mb-5">
                <div className="col-sm">
                    <h1 className="display-1 fw-bold text-center">
                        Our Approach
                    </h1>
                    <p className="text-center"> 
                    Our web development approach is centered around your business goals. We take the time to understand your needs, target audience, and industry trends, ensuring that the websites we build not only look great but also perform exceptionally. From initial concept to final launch, we work closely with you to deliver a website that truly represents your brand and delivers results.
                    </p>
                </div>
                <div className="col-sm">
                    <img src={`${image_cdn_url}porto.png`} className="img-fluid rounded" alt="Web development process" />
                </div>
            </div>
         
            <div>
                <h1 className="fw-bold display-1 text-center">
                    SERVICES WE OFFER
                </h1>
                <div className="d-flex flex-column gap-3 mb-5">
                    <div className="col-sm border rounded p-2">
                        <h5>Custom Website Development</h5>
                        <p>We build custom websites tailored to your specific requirements. Whether it's an e-commerce platform, corporate site, or personal blog, we ensure your website is unique, functional, and aligned with your brand identity.</p>
                    </div>
                    <div className="col-sm border rounded p-2">
                        <h5>Responsive Web Design</h5>
                        <p>With the increasing use of mobile devices, responsive web design is essential. We create websites that provide an optimal viewing experience across all devices, ensuring your site looks great and functions well on any screen size.</p>
                    </div>
                    <div className="col-sm border rounded p-2">
                        <h5>Content Management Systems (CMS)</h5>
                        <p>We develop websites on popular CMS platforms like WordPress, Joomla, and Drupal, giving you the power to manage your content easily. Our CMS solutions are flexible, scalable, and user-friendly, enabling you to keep your site up-to-date with minimal effort.</p>
                    </div>
                    <div className="col-sm border rounded p-2">
                        <h5>E-Commerce Development</h5>
                        <p>Boost your online sales with our e-commerce development services. We build secure, easy-to-navigate online stores that enhance user experience and drive conversions. From product catalog management to payment gateway integration, we provide everything you need for a successful online business.</p>
                    </div>
                    <div className="col-sm border rounded p-2">
                        <h5>Web Application Development</h5>
                        <p>We specialize in developing custom web applications that are powerful, scalable, and secure. Whether you need a customer portal, booking system, or any other web-based application, we create solutions that meet your business needs and enhance your digital capabilities.</p>
                    </div>
                    <div className="col-sm border rounded p-2">
                        <h5>Website Maintenance and Support</h5>
                        <p>Your website is a critical asset, and keeping it running smoothly is essential. We offer ongoing maintenance and support services to ensure your site remains secure, up-to-date, and fully functional. From regular updates to troubleshooting and performance optimization, we've got you covered.</p>
                    </div>
                </div>
            </div>
            <div className="row mb-5 mt-5">
                <h1 className="fw-bold display-1 text-center">
                    WHY CHOOSE US?
                </h1>
                <div className="text-center col-sm">
            <img src={`${image_cdn_url}handshake.png`} className="img-fluid  rounded"/>

            </div>
               <div className="col-sm">
                <ul>
                    <li><b>Experienced Developers:</b> Our team of skilled web developers brings years of experience and expertise in the latest web technologies, ensuring top-quality results.</li>
                    <li><b>User-Centric Design:</b> We prioritize user experience, creating websites that are intuitive, engaging, and designed to convert visitors into customers.</li>
                    <li><b>SEO-Friendly Development:</b> We build websites with SEO in mind, ensuring your site is optimized for search engines from the ground up, helping you rank higher and attract more traffic.</li>
                    <li><b>Scalable Solutions:</b> Whether you're a startup or an established enterprise, our web development solutions are scalable, allowing your site to grow with your business.</li>
                    <li><b>Proven Track Record:</b> We have successfully delivered web development projects across various industries, from small businesses to large corporations.</li>
                </ul>
               </div>

            </div>
            

            </div>
       
    )
}
