import { Link} from "react-router-dom";
import swal from 'sweetalert';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import { useState } from "react";
import SocialLogin from "../SocialLogin/SocialLogin";

const Register = () => {
    const [showPassword, setShowPassword] = useState(false);



    const handleRegister = (e) => {
        e.preventDefault();
        // console.log(e.currentTarget);
        const form = new FormData(e.currentTarget);
        const email = form.get("email");
        const password = form.get("password")
        const name = form.get("name")
        // password validation
        if (!/^(?=.*[A-Z])(?=.*[@#$%^&+=!]).{8,}$/.test(password)) {
            return swal("Error!", `Password should be At least 8 characters, including at least one uppercase letter and at least one special character`, "error");

        }

        // create user
        console.log(name, email, password);

    }

    return (
        <div className="bg-base-200">
           
            <div className="hero-content flex-col  lg:flex-row-reverse mx-auto" >
                <div className="card  flex-shrink-0  w-full max-w-xl  shadow-2xl bg-base-200">
                    <h1 className="text-3xl font-semibold text-center mt-5">Register Now!!</h1>
                    <form onSubmit={handleRegister} className="card-body ">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name="name" placeholder="Name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <div>
                                <input
                                    type={showPassword ? "text" : "password"}
                                    name="password" placeholder="password" className="input input-bordered w-full" required />
                                <span className="absolute right-10 top-80 cursor-pointer" onClick={() => { setShowPassword(!showPassword) }} >
                                    {
                                        showPassword ? <AiFillEye className="text-2xl " /> : <AiFillEyeInvisible className="text-2xl " />
                                    }
                                </span>
                            </div>
                        </div>
                        <div className="form-control mt-6">
                            <button type="submit" className="btn btn-primary">Register</button>
                        </div>
                        <p className="text-center">Already have an account? <Link to={"/login"} className="font-semibold text-blue-600 underline" >LogIn</Link> </p>
                    </form>
                    <div className="divider ">continue with</div>
                    <SocialLogin></SocialLogin>
                </div>
            </div>

        </div>
    );
};

export default Register;