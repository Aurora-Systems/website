import SubstackFeed from "../components/substack"
export default function Blog(){
    return(
        <div className="min-vh-100 mt-3">
          <div className="text-center">
          
            <div className="">
            <iframe src="https://aurorasystems.substack.com/embed" width="480" height="320" style={{border:"1px solid #EEE;", background:"white;"}} frameBorder="0" scrolling="no"></iframe>
            </div>
          </div>
        <SubstackFeed/>
        </div>
    )
}