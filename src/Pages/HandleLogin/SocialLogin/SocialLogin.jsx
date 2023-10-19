import { FcGoogle } from 'react-icons/fc';
import { AiOutlineGithub } from 'react-icons/ai';
// import { useLocation, useNavigate } from 'react-router-dom';
// import swal from 'sweetalert';
const SocialLogin = () => {
    // const location = useLocation();
    // const navigate = useNavigate();
    const handleSocialLogin = (media) => {
        // media()
        //     .then(res => {
        //         console.log(res.user)
        //         swal("Good job!", "Login Successful!", "success");
        //         navigate(location?.state ? location.state : '/');
        //     })
        //     .catch(error => {
        //         console.log(error)
        //     })
    }
    return (
        <div>
           
            <div className=" flex justify-evenly mb-5">
                <button onClick={() => handleSocialLogin()} className="btn btn-primary normal-case"> <FcGoogle />Google</button>
                <button className="btn btn-primary normal-case"> <AiOutlineGithub />GitHub</button>
            </div>
        </div>
    );
};

export default SocialLogin;