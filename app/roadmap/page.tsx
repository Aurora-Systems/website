import Image from "next/image"
export default function Roadmap() {
    return (
        <div className=" min-vh-100 text-center justify-content-center d-flex align-items-center">
            <div>

                <div className="mb-3 text-center">
                    <h1 className="display-1 fw-bold">
                        ROADMAP
                    </h1>
                    <p>Building Tools With A <b className="p-text">Purpose</b></p>
                </div>
                
                <div className="container vw-100 mb-3 roadmap_container gap-3 ">
                    <div className="d-flex align-items-center roadmap_card">
                        <div>
                        <div className="pt-2">
                        <p><i className="bi bi-circle-fill text-primary "></i></p>
                        </div>
                        <div className="border rounded p-2">
                            <div>
                                <p className="p-text fw-normal">Q4 -2024</p>
                            <h5>i-Claim</h5>
                            <p>
                            We are enablling health providers to receive timely payments by assisting insurance companies in swiftly detecting fraud and errors in claims, reducing the waiting period from 30 days to just seconds.
                            </p>
                            <p className="p-text">Beta - Live</p>
                            </div>
                        </div>
                        </div>
                        
                    </div>
                    
                    <div className="d-flex align-items-center roadmap_card">
                        <div>
                        <div className="pt-2">
                        <p><i className="bi bi-circle-fill text-primary "></i></p>
                        </div>
                        <div className="border rounded p-2">
                        <div>
                        <p className="p-text fw-normal">Q4 -2025</p>

                            <h5>Bleu</h5>
                            <p>
                            We are redefining banking across Africa by creating a connected network that enables instant payments. Our neobank will provide financial access to all, making banking accessible throughout the continent.
                            </p>
                            <p className="p-text">In progress</p>
                            </div>
                        </div>
                        </div>
                       
                    </div>
                    <div className="d-flex align-items-center roadmap_card">
                        <div>

                        
                        <div className="pt-2">
                        <p><i className="bi bi-circle-fill text-primary "></i></p>
                        </div>
                        <div className="border rounded p-2">
                        <div>
                        <p className="p-text fw-normal">Q2 -2025</p>

                            <h5>Attribute AI</h5>
                            <p>
                            We are building a safer alternative to current AI platforms, Attribute will provide sources and references for responses given making sure you can trust and give credit to those who deserve it. AI which is truly Open Source
                            </p>
                            <p className="p-text">Planning stage</p>

                            </div>
                        </div>
                        </div>
                        
                    </div>
                   
                </div>
                <div>
                    <button className="btn p-btn">Stay Updated</button>
                </div>
            </div>
        </div>
    )
}