import Image from "next/image"
export default function Portfolio(){
    return(
        <div className="container ">
            <div>
            <div className="text-center ">
                <h1 className="display-1 fw-bold text-center" >PORTFOLIO</h1>
                <p>Building world class solutions</p>
            </div>
            <div className="container-fluid">
            <div className="portfolio mb-5 gap-5">
           
            <div className="projects  ">
                <div className="project zso_portfolio">
                    <div className="text-center">

                    <Image width={400} height={0} className="img-fluid" src="https://ngratesc.sirv.com/website/zimservices.png" alt="ZSO Project"/>
                    </div>

                    <div className="project-info bg-dark bg-opacity-50 w-100 rounded">
                        <h2 className="text-white ">Zim Services Online</h2>
                        <button className="btn border-0 w-100  text-white zso_portfolio">Visit</button>
                    </div>
                </div>
                
            </div>
          
            <div className="projects ">
                <div className="project ofh_portfolio">
                    <div className="text-center">

                    <Image width={300} height={0} className="img-fluid" src="https://ngratesc.sirv.com/website/ofh_port.png" alt="ZSO Project"/>
                    </div>

                    <div className="project-info bg-dark bg-opacity-50   w-100 rounded">
                        <h2 className="text-white">Our Financial Health</h2>
                        <button className="btn border-0  w-100 text-white ofh_portfolio">Visit</button>
                    </div>
                </div>
                
            </div>
            <div className="projects ">
                <div className="project wlc_portfolio">
                    <div className="text-center">

                    <Image width={300} height={0} className="img-fluid" src="https://ngratesc.sirv.com/website/wlc_port.png" alt="ZSO Project"/>
                    </div>

                    <div className="project-info bg-dark bg-opacity-50   w-100 rounded">
                        <h2 className="text-white">WLC Collection</h2>
                        <button className="btn border-0  w-100 text-white wlc_portfolio">Visit</button>
                    </div>
                </div>
                
            </div>
            <div className="projects ">
                <div className="project iclaim_portfolio">
                    <div className="text-center">

                    <Image width={300} height={0} className="img-fluid" src="https://ngratesc.sirv.com/website/iclaim_preview.png" alt="ZSO Project"/>
                    </div>

                    <div className="project-info bg-dark bg-opacity-75 rounded">
                        <h2 className="text-white">i-Claim</h2>
                        <button className="btn border-0 w-100 text-white iclaim_portfolio">Visit</button>
                    </div>
                </div>
                
            </div>
        </div>
            </div>
            </div>
        </div>
    )
}