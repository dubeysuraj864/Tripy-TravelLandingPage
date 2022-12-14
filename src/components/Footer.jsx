import Logo from "../images/Logo.png";
import Facebook from "../images/facebook.webp";
import Instagram from "../images/instagram.webp";
import Youtube from "../images/youtube.webp";
import SendButton from "../images/Send-button.webp";
function Footer() {
  return (
    <>
      <div className="footer text-center sm:text-left sm:flex sm:justify-around pb-20 bg-white pt-5">
        <div className="py-5 m-auto">
          <div>
            <img className=" sm:mx-0 m-auto animate-bounce" src={Logo} width={80} alt="" />
          </div>
          <div className="address my-2 text-sm font-light">
            4517 Washington Ave. <br /> Manchester, Kentucky 39495
          </div>
          <div className="social flex justify-center
          sm:flex sm:justify-start">
            <a href="/" target="_blank" rel="noopener noreferrer">
              <img src={Facebook} width={20} alt="" />
            </a>
            <a href="/" target="_blank" rel="noopener noreferrer">
              <img src={Instagram} width={20} alt="" />
            </a>
            <a href="/" target="_blank" rel="noopener noreferrer">
              <img src={Youtube} width={20} alt="" />
            </a>
          </div>
        </div>
        <div className="py-5 m-auto">
          <div className="font-bold text-sm">About</div>
          <div className="font-light text-sm">About us</div>
          <div className="font-light text-sm">Feature</div>
          <div className="font-light text-sm">News</div>
          <div className="font-light text-sm">Plans</div>
        </div>
        <div className="py-5 m-auto">
          <div className="font-bold text-sm">Company</div>
          <div className="font-light text-sm">Why Tripy</div>
          <div className="font-light text-sm">Partners with us</div>
          <div className="font-light text-sm">FAQ</div>
          <div className="font-light text-sm">Blog</div>
        </div>
        <div className="py-5 m-auto">
          <div className="font-bold text-sm">Support</div>
          <div className="font-light text-sm">Account</div>
          <div className="font-light text-sm">Support Center</div>
          <div className="font-light text-sm">Feedback</div>
          <div className="font-light text-sm">Contact us</div>
        </div>
        <div className=" py-5 m-auto">
          <div className="font-bold text-sm">Newsletter</div>
          <div className="font-light text-sm my-2 m-auto">
            Subscribe our newsletter and get exciting offers
          </div>
          <div className="font-light text-sm flex justify-center sm:justify-left items-center m-auto  sm:m-0 sm:flex sm:justify-start ">
            <input
              type="text"
              placeholder="Enter your email address"
              className="mr-2 bg-slate-100 rounded-xl px-4 py-2 "
            />
            <button>
              <img src={SendButton} className="m-auto" width={30} alt="" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
