
import Link from "next/link";

export default function UIDesign() {
    return (
        <div className="min-vh-100 mt-3">
            <div className="mt-5">
                <div className="col-sm text-center">
                    <h1 className="display-2 fw-bold">UI & UX</h1>
                    <p><small>User Interface & User Experience</small></p>
                    <p>A well-crafted user interface is the key to creating an engaging, intuitive, and delightful user experience. We specialize in designing visually appealing and highly functional user interfaces that resonate with your audience and enhance the usability of your digital products.</p>
                    <Link href="/contact_us"><button className="btn p-btn">Get In Touch</button></Link>
                </div>
                <div className="rounded text-center mb-5">
                    <img src="https://ngratesc.sirv.com/website/bleu_mobile.png" className="img-fluid w-75" alt="UI design concept" />
                </div>
            </div>
            <div className="row d-flex align-items-center mb-5">
                <div className="col-sm">
                    <h1 className="display-1 fw-bold text-center">
                        Our Approach
                    </h1>
                    <p className="text-center">
                        We understand that great design goes beyond aesthetics. Our approach to UI design is rooted in a deep understanding of your users, your brand, and your business objectives. We work closely with you to create interfaces that are not only beautiful but also intuitive, ensuring that your users have a seamless and enjoyable experience.
                    </p>
                </div>
                <div className="col-sm">
                    <img src="https://estenduc.sirv.com/website/m-3.jpg" className="img-fluid rounded" alt="Design process" />
                </div>
            </div>

            <div>
                <h1 className="fw-bold display-1 text-center">
                    SERVICES WE OFFER
                </h1>
                <div className="d-flex flex-column gap-3 mb-5">
                    <div className="col-sm border rounded p-2">
                        <h5>Custom UI Design</h5>
                        <p>Every digital product has its own unique personality, and your user interface should reflect that. Our custom UI design services are tailored to your brand’s identity and your users’ needs.</p>
                    </div>
                    <div className="col-sm border rounded p-2">
                        <h5>Responsive Design</h5>
                        <p>We specialize in responsive design, ensuring that your UI looks and functions perfectly across all devices, providing a consistent and optimal user experience everywhere.</p>
                    </div>
                    <div className="col-sm border rounded p-2">
                        <h5>User-Centered Design</h5>
                        <p>We employ a user-centered design approach, focusing on the needs, preferences, and behaviors of your target audience to create interfaces that are easy to navigate.</p>
                    </div>
                    <div className="col-sm border rounded p-2">
                        <h5>Interaction Design</h5>
                        <p>We craft intuitive and responsive elements like buttons, sliders, animations, and transitions that feel natural and enhance the overall user experience.</p>
                    </div>
                    <div className="col-sm border rounded p-2">
                        <h5>UI Design for Web and Mobile Apps</h5>
                        <p>We have the expertise to design interfaces that align with the latest design trends and platform-specific guidelines, optimized for performance, accessibility, and ease of use.</p>
                    </div>
                    <div className="col-sm border rounded p-2">
                        <h5>Brand Integration</h5>
                        <p>We seamlessly integrate your brand’s identity into every aspect of the UI, creating a cohesive and memorable experience for your users.</p>
                    </div>
                </div>
            </div>
            <div>
                <h1 className="fw-bold display-1 text-center">
                    WHY CHOOSE US
                </h1>
                <div>
                    <ul>
                        <li><b>User-Centric Philosophy:</b> Our design process revolves around the needs and expectations of your users, ensuring that the final product is intuitive, accessible, and enjoyable to use.</li>
                        <li><b>Attention to Detail:</b> We focus on the little things that make a big difference, ensuring every element of your UI is polished and aligned with your brand.</li>
                        <li><b>Cross-Platform Expertise:</b> Whether for iOS, Android, or web, we create stunning and effective UIs across all platforms.</li>
                        <li><b>Collaboration and Communication:</b> We value your input throughout the design process, ensuring your vision is reflected in the final design.</li>
                        <li><b>Cutting-Edge Tools and Techniques:</b> We use the latest tools and techniques to create interfaces that are beautiful, forward-thinking, and future-proof.</li>
                    </ul>
                </div>

            </div>
            <div className="text-center">
            <img src="https://ngratesc.sirv.com/website/handshake.png" className="img-fluid  rounded h-50"/>

            </div>
        </div>
        
    )
}
