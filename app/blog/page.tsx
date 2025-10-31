import SubstackFeed from "../components/substack"
import { image_cdn_url } from "../components/links"

export default function Blog(){
    return(
        <div className="min-vh-100 mt-3">
          <div className="text-center">
          
            <div className="container">
              <div>
                <img src={`${image_cdn_url}aurora_logo.png`} className="img-fluid" width={80}/>
              </div>
            <iframe src="https://aurorasystems.substack.com/embed"  frameBorder="0" scrolling="no"></iframe>
            </div>
          </div>
        <SubstackFeed/>
        </div>
    )
}