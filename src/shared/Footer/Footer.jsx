import { FaSkype, FaFacebook, FaYoutube } from "react-icons/fa";
import logo from "../../assets/logo.png"

const Footer = () => {
    return (
        
        
        <div className="bg-blue-900 w-10/12 mx-auto">
            <footer className="footer p-10">
                <div>
                    <span className="text-5xl font-extrabold mb-4 text-white">Play Land</span>
                    <img className="h-28 mx-auto" src={logo} alt="" />
                </div>
                <div>
                    <h4 className="font-bold text-xl text-white">Our Store</h4>
                    <p className="font-semibold footer-title text-white">Badda, NotunBazar, Dhaka-1212</p>
                    <p className="font-semibold footer-title text-white">We Have No Branches</p>
                    <p className="font-bold text-xl text-white">Contact </p>
                    <span className="font-semibold footer-title text-white">+000000000</span>
                    
                    <h4 className="footer-title text-2xl font-bold text-white">@COPYRIGHT 2023</h4>
                </div>
                <div>
                    <span className="text-white font-bold text-xl">Our Socials </span>
                    <div className="grid grid-flow-col gap-4">
                        <a href="https://www.skype.com/"><FaSkype className="text-3xl footer-title text-white"/></a>
                        <a href="https://www.facebook.com/"><FaFacebook className="text-3xl footer-title text-white"/></a>
                        <a href="https://www.youtube.com/"><FaYoutube className="text-3xl footer-title text-white"/></a>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;