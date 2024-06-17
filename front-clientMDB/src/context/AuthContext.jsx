import { createContext, useState, useContext, useEffect } from "react";
import { axios } from "../helpers/axios";
import Cookies from 'js-cookie';

export const AuthContext = createContext();

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
};

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const signup = async (user) => {
        console.log(user);
        try {
            const res = await axios.post('/register', user);
            console.log(res);
            setUser(res.data);
            setIsAuthenticated(true);
        } catch (error) {
            console.log("ERROR", error.response.data.message);
        }
    }

    const signin = async (user) => {
        console.log(user);
        try {
            const res = await axios.post('/login', user);
            console.log(res.data);
            setIsAuthenticated(true);
            window.alert(res.data.message)
        } catch (error) {
            console.log("ERROR", error.response.data.message);
            window.alert("ERROR", error.response.data.message)
        }
    };

    useEffect(() => {

    }, [])

    return (
        <AuthContext.Provider
            value={{
                signup,
                signin,
                user,
                isAuthenticated,
            }}>
            {children}
        </AuthContext.Provider>
    )
}