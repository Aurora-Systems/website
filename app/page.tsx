import Image from "next/image"
import Link from "next/link";
import Marquee from "react-fast-marquee";
export default function Home() {
  return (
    <main>
   <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="row gap-2  d-flex align-items-center animate__animated animate__fadeInDown">
        <div className="col-sm text-center text-md-start mb-3 ">
          <h3 className="display-1 fw-bold ">
            ACCELERATING <br/> DIGITAL <br/> ADOPTION
          </h3>
          <p>We build to scale by thoroughly validating and conducting a series of investigations to provide you with a robust ecosystem.</p>
          <Link href="/contact"><button className="btn p-btn">Ready To Build?</button></Link>
        </div>
        <div className="col-sm  text-center">
          <Image 
            src="https://ngratesc.sirv.com/website/lander%20bleu.png"
            className="img-fluid ms-5" 
            width={200} 
            height={500}
            alt="Mockup of Bleu on a phone, evolutionary Neobank"
          />
        </div>
      </div>
      </div>
      <div className="d-flex justify-content-center align-items-center mt-5 mb-5">
      <div className="row mb-5 gap-2 d-flex align-items-center">
        <div className="col-sm text-center text-md-start">
          <h3 className="display-5 fw-bold">WHAT DO WE DO?</h3>
          <p>
            We transform innovative ideas into cutting-edge digital solutions. Our team of software developers, designers, and strategists are experts in bringing visions to life through custom software and applications.
          </p>
          <Link href="/contact"><button className="btn p-btn">I have an idea!</button></Link>
        </div>
        <div className="col-sm text-center">
          <Image 
            src="https://ngratesc.sirv.com/website/zimservices.png" 
            width={600} 
            height={650}
            className="img-fluid"
            alt="Mockup preview of Zimbabwe services online website"
          />
        </div>
      </div>
      </div>
      <div className="mb-5 container">
        <div className="text-center">
          <h3 className="display-5 fw-bold">OUR PROCESS</h3>

          <div className="row gap-4 ">
            <div className="col-sm text-start border rounded p-3">
            <h1 ><i className="bi bi-book-half"></i></h1>
              <h5 className="fw-bold">Discovery and Planning</h5>
              <p>
                We begin with an in-depth understanding of your goals, challenges, and vision, laying a strong foundation for the project
              </p>
            </div>
            <div className="col-sm text-start border rounded p-3">
              <h1><i className="bi bi-pencil-square"></i></h1>
              <h5 className="fw-bold">Design and Prototyping</h5>
              <p>
              Interactive prototypes visualize the end product, focusing on user-centric designs that are both practical and innovative.
              </p>
            </div>
            <div className="col-sm text-start border rounded p-3">
              <h1><i className="bi bi-git"></i></h1>
              <h5 className="fw-bold">Development and Testing</h5>
              <p>
                Our developers ensure robust, scalable, and secure solutions, with rigorous testing to guarantee optimal performance.
              </p>
            </div>
            <div className="col-sm text-start border rounded p-3">
              <h1><i className="bi bi-rocket-takeoff"></i></h1>
              <h5 className="fw-bold">Launch and Support</h5>
              <p>
                We facilitate smooth software deployment and provide ongoing support to ensure continued success and adaptability.
              </p>
            </div>
          </div>
        </div>
        <div className="mt-3 mb-3 text-center">
            <Link href="/services"><button className="btn p-btn">View Our Services</button></Link>
        </div>
        <div className="text-center mb-5 mt-5">
          <Image src="https://ngratesc.sirv.com/website/bleu_mobile.png" className="img-fluid" width={500} height={100} alt="Mockup preview of WLC website"/>
        </div>
      </div>
      <div className="text-center">
        <h5 className="mb-3">Brands We Worked With</h5>
          <Marquee loop={0} className="gap-5 z-0">
      
            <div className="col-sm  me-5">
              <Image src="https://ngratesc.sirv.com/website/fif.png" width={40} height={40} alt="FIF logo"/>
              <p><small>FIF College</small></p>
            </div>
            <div className="col-sm ms-5 me-5">
              <Image src="https://ngratesc.sirv.com/website/prospect.png" width={40} height={40} alt="FIF logo"/>
              <p><small>PPPMH</small></p>

            </div>
            <div className="col-sm ms-5 me-5">
              <Image src="https://ngratesc.sirv.com/website/zso.png" width={40} height={40} alt="FIF logo"/>
              <p><small>ZSO</small></p>

            </div>
            <div className="col-sm ms-5 me-5">
              <Image src="https://ngratesc.sirv.com/website/bellprize.png" width={40} height={40} alt="FIF logo"/>
              <p><small>Bellprize</small></p>
            </div>
            <div className="col-sm ms-5 me-5">
              <Image src="https://ngratesc.sirv.com/website/riom.png" width={40} height={40} alt="FIF logo"/>
              <p><small>Riom Medcare</small></p>
            </div>
            <div className="col-sm ms-5 me-5">
              <Image src="https://ngratesc.sirv.com/website/logoBig.webp" width={40} height={40} alt="FIF logo"/>
              <p><small>StartUp</small></p>
            </div>
            <div className="col-sm ms-5 me-5">
              <Image src="https://ngratesc.sirv.com/website/exalt.png" width={40} height={40} alt="FIF logo"/>
              <p><small>Exalt</small></p>
            </div>
            <div className="col-sm ms-5 me-5">
              <Image src="https://ngratesc.sirv.com/website/nehms.png" width={100} height={40} alt="FIF logo"/>
              <p><small>NEMHS</small></p>
            </div>
            <div className="col-sm ms-5 me-5">
              <Image src="https://ngratesc.sirv.com/website/OFH.png" width={90} height={40} alt="OFH logo"/>
              <p><small>OFH</small></p>
            </div>
            <div className="col-sm ms-5 me-5">
              <Image src="https://ngratesc.sirv.com/website/WLC.webp" width={40} height={40} alt="OFH logo"/>
              <p><small>WLC</small></p>
            </div>
          </Marquee>
      </div>
      <div className="row mt-5 mb-5">
      <div className="text-center">
        <div >
        <Image 
          src="https://ngratesc.sirv.com/website/iclaim_preview.png" 
          width={300} 
          height={0}
          className="img-fluid"
          alt="Mockup of i-Claim website"
        />
        </div>
        <div >
          <h1>We Revolutionize Industries</h1>
          <p>Discover how we developed i-Claim and how it’s helping insurance companies save up to 40% annually.</p>
          <Link target="_blank" href="https://iclaim.aurorasystems.co.zw"><button className="btn p-btn">Read More</button></Link>
        </div>

      
      </div>
      <div className="col-sm">

      </div>
      </div>
      
   </main>
  );
}
