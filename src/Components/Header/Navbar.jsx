import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
    const user = false
    // {
    //     user && <>
    //         <li><NavLink to={"/blogs"}>Blogs</NavLink></li>
    //         <li><NavLink to={"/events"}>Events</NavLink></li>
    //     </>
    // }

    const NavLinks = <>
        <li><NavLink to={"/"}>Home</NavLink></li>
        {/* <li><NavLink to={"/about_us"}>About Us</NavLink></li> */}
        {/* <li><NavLink to={"/services"}>Services</NavLink></li> */}
        <li><NavLink to={"/add_product"}>Add Product</NavLink></li>
        <li><NavLink to={"/my_cart"}>My Cart</NavLink></li>
        <li><NavLink to={"/contact_us"}>Contact Us</NavLink></li>
    </>



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
                <div className="navbar-end">
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
                                    <button className="btn btn-sm  btn-ghost">Logout</button>

                                </li>
                            </ul>
                        </div>
                            :
                            <Link to='/login'>
                                <button className="btn btn-secondary">Login</button>
                            </Link>
                    }

                </div>
            </div>
        </div>
    );
};

export default Navbar;