import PropTypes from 'prop-types';
import { useState } from 'react';
import { createContext } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import auth from '../Firebase/Firebase.config';
import { useEffect } from 'react';

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);


    // create User
    const CreateUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }
    // login
    const Login = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }
    // Social Login Google

    const GoogleProvider = new GoogleAuthProvider();
    const GoogleSingIn = () => {
        setLoading(true);
        return signInWithPopup(auth, GoogleProvider)
    }

    // logout

    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }

    // MANAGE uSER
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, CurrentUser => {
            console.log(CurrentUser);
            setUser(CurrentUser);
            setLoading(false);
        });
        return () => {
            unSubscribe()
        }
    }, [])

    // send the value to the Context
    const value = {
        user, loading,
        CreateUser,
        logOut,
        Login,
        GoogleSingIn,
    };

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.node,
};
export default AuthProvider;
