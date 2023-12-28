import { FaFacebook, FaGithub } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import ComponentLayout from "../ComponentLayout/ComponentLayout";

const Navbar = () => {

    const navItems = <>
        <li><a href="">Home</a></li>
        <li><a href="">About</a></li>
        <li><a href="">Service</a></li>
        <li><a href="">Projects</a></li>
        <li><a href="">Contact</a></li>
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
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                                {navItems}
                            </ul>
                        </div>
                        <a className="text-2xl font-bold">Codo<span className="">nut.</span></a>
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