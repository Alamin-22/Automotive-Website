import { Link, NavLink } from "react-router-dom";
import { BsPersonCircle } from 'react-icons/bs';
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import DarkModeToggle from "../../Theme/DarkModeToggle";
const Navbar = () => {
    const { user, logOut } = useContext(AuthContext)



    // Theme
    const [theme, setTheme] = useState(localStorage.getItem("theme") ? localStorage.getItem("theme") : "light")
    useEffect(() => {
        localStorage.setItem("theme", theme);
        const localTheme = localStorage.getItem("theme");
        document.querySelector("html").setAttribute("data-theme", localTheme)
    }, [theme]);

    const handleToggle = e => {
        if (e.target.checked) {
            setTheme("dark")
        } else {
            setTheme("light")
        }
    }







    const NavLinks = <>
        <li><NavLink to={"/"} className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? " text-red-700 underline" : ""
        }>Home</NavLink></li>
        <li><NavLink to={"/about_us"} className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? " text-red-700 underline" : ""
        }>About Us</NavLink></li>
        {/* <li><NavLink to={"/services"}>Services</NavLink></li> */}
        {
            user && <>
                <li><NavLink to={"/add_product"} className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? " text-red-700 underline" : ""
                }>Add Product</NavLink></li>
                <li><NavLink to={"/my_cart"} className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? " text-red-700 underline" : ""
                }>My Cart</NavLink></li>
            </>
        }
        <li><NavLink to={"/services"} className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? " text-red-700 underline" : ""
        }>Services</NavLink></li>
        <li><NavLink to={"/contact_us"} className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? " text-red-700 underline" : ""
        }>Contact Us</NavLink></li>
    </>

    const handleLogout = () => {
        logOut()
            .then()
            .catch()
    }

    return (
        <div>
            <div className="navbar bg-base-200">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {NavLinks}
                        </ul>
                    </div>
                    <img src="https://i.ibb.co/JxtncqP/logo2.png" className=" h-16 ml-[45%] md:ml-[70%]  lg:ml-1" alt="" />
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {NavLinks}
                    </ul>
                </div>

                {/* <p><input type="checkbox" className=" toggle toggle-success" checked /></p> */}
                <div className="navbar-end">
                    <DarkModeToggle handleToggle={handleToggle}></DarkModeToggle>
                    {
                        user ? <div className="dropdown dropdown-end">
                            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    <img src={user.photoURL} />
                                </div>
                            </label>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                                <li>
                                    <button className="btn btn-sm  btn-ghost">{user.displayName}</button>

                                </li>
                                <li>
                                    <button onClick={handleLogout} className="btn btn-sm  btn-ghost">Logout</button>

                                </li>
                            </ul>
                        </div>
                            :
                            <Link to='/login'>
                                <BsPersonCircle className="text-4xl"></BsPersonCircle>
                                <p className="text-xs text-center">Login</p>
                            </Link>
                    }

                </div>
            </div>
        </div>
    );
};

export default Navbar;