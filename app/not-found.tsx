import { notFound } from "next/navigation";
import Link from "next/link";

export default function NotFound(){
    return(
        <div className="vh-100 d-flex align-items-center justify-content-center">
            <div className="text-center">
                <img src="https://ngratesc.sirv.com/website/404astronaut.png" width="200" className="img-fluid"/>
            <h1>404</h1>
            <p>Seems you went on an adventure, lets help you get home</p>
            <Link href="/"><button className="btn p-btn">Home</button></Link>
            </div>
           
        </div>
    )
}