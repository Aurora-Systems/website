import Image from "next/image"
import Link from "next/link"
export default function Portfolio() {
    return (
        <div className="container ">
            <div>
                <div className="text-center ">
                    <h1 className="display-1 fw-bold text-center" >PORTFOLIO</h1>
                    <p>Building world class solutions</p>
                </div>
                <div className="">
                    <div className="row gap-3 mb-5 ">

                        <div className="col-sm gap-3">
                            <div className="col-sm  project zso_portfolio">
                                <div className="text-center">

                                    <img width={50} className="img-fluid w-75" src="https://ngratesc.sirv.com/website/zimservices.png" alt="ZSO Project" />
                                </div>

                                <div className="project-info bg-dark bg-opacity-50 w-100 rounded">
                                    <h2 className="text-white ">Zim Services Online</h2>
                                    <Link href="https://zimbabweservices.com/" target="_blank" className="w-100"><button className="btn border-0 w-100  text-white zso_portfolio">Visit</button></Link>
                                </div>
                            </div>

                        </div>

                        <div className="col-sm">
                            <div className="project ofh_portfolio">
                                <div className="text-center">

                                    <img className="img-fluid w-75" src="https://ngratesc.sirv.com/website/mobil_app.png" alt="ZSO Project" />
                                </div>

                                <div className="project-info bg-dark bg-opacity-50   w-100 rounded">
                                    <h2 className="text-white">Exalt</h2>
                                    <Link href="https://exalt.co.zw" target="_blank" className="w-100"><button className="btn border-0  w-100 text-white ofh_portfolio">Visit</button></Link>
                                </div>
                            </div>

                        </div>
                        <div className="col-sm">
                            <div className="project wlc_portfolio">
                                <div className="text-center">

                                    <img className="img-fluid w-75" src="https://ngratesc.sirv.com/website/wlc_port.png" alt="ZSO Project" />
                                </div>

                                <div className="project-info bg-dark bg-opacity-50   w-100 rounded">
                                    <h2 className="text-white">WLC Collection</h2>
                                    <Link href="https://www.wlcollection.com/" target="_blank" className="w-100"><button className="btn border-0  w-100 text-white wlc_portfolio">Visit</button></Link>
                                </div>
                            </div>

                        </div>
                        <div className="col-sm ">
                            <div className="project iclaim_portfolio">
                                <div className="text-center">

                                    <img className="img-fluid w-75" src="https://ngratesc.sirv.com/website/iclaim_preview.png" alt="ZSO Project" />
                                </div>

                                <div className="project-info bg-dark bg-opacity-75 rounded">
                                    <h2 className="text-white">i-Claim</h2>
                                    <Link href="https://iclaim.aurorasystems.co.zw" target="_blank" className="w-100"><button className="btn border-0 w-100 text-white iclaim_portfolio">Visit</button></Link>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}