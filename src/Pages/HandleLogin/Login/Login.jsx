import { Link} from "react-router-dom";
import { useState } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import SocialLogin from "../SocialLogin/SocialLogin";

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
    // console.log("state", location)


    const handleLogin = (e) => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const email = form.get("email");
        const password = form.get("password")

        // login
        console.log(email, password)
    }

    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                        <p className="py-6">Our user-friendly login feature makes accessing your account a breeze, offering both speed and security. Whether you are a car enthusiast seeking to manage your vehicle listings or a prospective buyer eager to browse our wide selection, simply input your login details – username and password – for immediate access to your account. We prioritize the safety of your data, guaranteeing a smooth and secure login process. If you are new to our platform, signing up is a breeze, granting you access to a world of automotive opportunities. Log in today and kickstart your AutoMobile journey!</p>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleLogin} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
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
                            <p className="text-center">Do not have an account? <Link to={"/register"} className="font-semibold text-blue-600 underline" >Register</Link> </p>
                        </form>
                        <SocialLogin></SocialLogin>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;