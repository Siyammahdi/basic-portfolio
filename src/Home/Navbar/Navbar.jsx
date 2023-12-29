import { FaFacebook, FaGithub } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import ComponentLayout from "../ComponentLayout/ComponentLayout";
import { Link } from "react-scroll";
import Icon from "../../assets/Profile/favicon.png"

const Navbar = () => {

    const navItems = <>
        <Link to="home" smooth={true} duration={1000}><li><a>Home</a></li></Link>
        <Link to="about" smooth={true} duration={1000}><li><a>About</a></li></Link>
        <Link to="skills" smooth={true} duration={1000}><li><a>Skills</a></li></Link>
        <Link to="services" smooth={true} duration={1000}><li><a>Services</a></li></Link>
        <Link to="contact" smooth={true} duration={1000}><li><a>Contact</a></li></Link>
    </>

    return (
        <div className="fixed bg-black bg-opacity-20 backdrop-blur-lg z-[1] top-0 w-full">
            <ComponentLayout>
                <div className="navbar">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </div>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-10 p-2 shadow bg-base-100 rounded-box w-52">
                                {navItems}
                            </ul>
                        </div>
                        <a className="text-2xl font-bold hidden lg:block"><img className="w-12" src={Icon} alt="" /></a>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1">
                            {navItems}
                        </ul>
                    </div>
                    <div className="navbar-end list-none text-xl space-x-4">
                        <li><a className="hover:text-blue-500" href="https://www.facebook.com/siyammahdi911"><FaFacebook /></a></li>
                        <li><a className="hover:text-gray-600" href="https://github.com/Siyammahdi"><FaGithub /></a></li>
                        <li><a className="hover:text-gray-600" href="https://twitter.com/siyam_mahdi"><FaXTwitter /></a></li>
                    </div>
                </div>
            </ComponentLayout>
        </div>
    );
};

export default Navbar;