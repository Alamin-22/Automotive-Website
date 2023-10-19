import { useContext } from "react";
import { AuthContext } from "../../Authprovider/AuthProvider";

import { MdOutlineWork } from 'react-icons/md';
import { FaHome } from 'react-icons/fa';
const Profile = () => {
    const { logout, user } = useContext(AuthContext)
    const handleLogOut = () => {
        logout()
            .then(result => {
                console.log(result);
            })
            .catch(error => {
                console.error(error);
            })
    }
    return (