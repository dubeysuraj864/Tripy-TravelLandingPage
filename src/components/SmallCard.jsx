
import Image1 from "../images/card-image1.png";

function SmallCard() {
    return ( <>
     <div className="main sm:w-52 w-4/5 h-fit sm:mx-2 sm:my-2 mt-10 rounded-xl bg-white ml-auto mr-auto ">
        <div className="top  p-2">
            <div>
                <img src={Image1} className="rounded-xl" width={400} alt="" />
            </div>
            
        </div>
        <div className="bottom w-full bg-white rounded-b-xl p-3">
         
            <div className="location-name text-sm mb-1">
            Prague, Czechia
            </div>
        
            <div className="price text-pink-600 font-bold text-xl">
                $200
            </div>
        </div>
    </div>
    </> );
}

export default SmallCard;