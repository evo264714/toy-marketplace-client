import { FaSkype, FaFacebook, FaYoutube } from "react-icons/fa";
import logo from "../../assets/logo.png"

const Footer = () => {
    return (
        
        
        <div className="bg-gradient-to-r from-red-500 via-pink-500 to-purple-500 w-10/12 mx-auto">
            <footer className="footer p-10">
                <div>
                    <span className="text-5xl font-extrabold mb-4 text-black">Play Land</span>
                    <img className="h-28 mx-auto" src={logo} alt="" />
                </div>
                <div>
                    <span className="footer-title">Company</span>
                    <h4 className="font-bold text-xl">Our Store-</h4>
                    <p className="font-semibold text-black">Badda, NotunBazar, Dhaka-1212</p>
                    <p className="font-semibold text-black">We Have No Branches</p>
                    <p className="font-bold text-xl">Contact- </p>
                    <span className="font-semibold text-black">+000000000</span>
                    
                    <h4 className="text-black text-2xl font-bold">@COPYRIGHT 2023</h4>
                </div>
                <div>
                    <span className="footer-title">Our Socials</span>
                    <div className="grid grid-flow-col gap-4">
                        <a href="https://www.skype.com/"><FaSkype className="text-3xl"/></a>
                        <a href="https://www.facebook.com/"><FaFacebook className="text-3xl"/></a>
                        <a href="https://www.youtube.com/"><FaYoutube className="text-3xl"/></a>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;