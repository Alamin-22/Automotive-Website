import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import SocialLogin from "../SocialLogin/SocialLogin";
import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";
import Swal from "sweetalert2";

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();
    // console.log("state", location)

    const { Login } = useContext(AuthContext);


    const handleLogin = (e) => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const email = form.get("email");
        const password = form.get("password")

        // login
        console.log(email, password)
        Login(email, password)
            .then(result => {
                console.log(result.user)
                Swal.fire('Success!', 'Login Successful', 'success')
                navigate(location?.state ? location.state : '/');
            })
            .catch(error => {
                console.log(error);
                Swal.fire('Login Failed!', 'Please make sure your  Email and Password is correct', 'error')
            })
    }

    return (
        <div>
            <div className="hero min-h-screen bg-base-200  " style={{ backgroundImage: 'url(https://i.ibb.co/FBTqRSq/pexels-supreet-7942893.jpg)' }}>
                <div className="hero-overlay rounded-lg bg-opacity-20"></div>
                <div className="hero-content flex-col  lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold text-orange-400">Login now!</h1>
                        <p className="py-6 text-[#ffff]">Our user-friendly login feature makes accessing your account a breeze, offering both speed and security. Whether you are a car enthusiast seeking to manage your vehicle listings or a prospective buyer eager to browse our wide selection, simply input your login details – username and password – for immediate access to your account. We prioritize the safety of your data, guaranteeing a smooth and secure login process. If you are new to our platform, signing up is a breeze, granting you access to a world of automotive opportunities. Log in today and kickstart your AutoMobile journey!</p>
                    </div>
                    <div className="card  flex-shrink-0  w-full max-w-sm shadow-2xl  bg-transparent">
                        <form onSubmit={handleLogin} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-slate-100">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <div>
                                    <input
                                        type={showPassword ? "text" : "password"}
                                        name="password" placeholder="password" className="input input-bordered w-full" required />
                                    <span className="absolute right-10 top-[136px] cursor-pointer" onClick={() => { setShowPassword(!showPassword) }} >
                                        {
                                            showPassword ? <AiFillEye className="text-2xl " /> : <AiFillEyeInvisible className="text-2xl " />
                                        }
                                    </span>
                                </div>
                            </div>
                            <div className="form-control mt-6">
                                <button type="submit" className="btn btn-primary">Login</button>
                            </div>
                            <p className="text-center text-slate-100">Do not have an account? <Link to={"/register"} className="font-semibold text-blue-600 underline" >Register</Link> </p>
                        </form>
                        <div className="divider text-slate-100">continue with</div>
                        <SocialLogin></SocialLogin>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;