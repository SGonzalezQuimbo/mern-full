import { createContext, useState, useContext, useEffect } from "react";
import { axios } from "../helpers/axios";
import Cookies from 'js-cookie';
import { verifyTokenRequest } from "../helpers/verifyTokenRequest";

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
    const [loading, setLoading] = useState(true);

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
            console.log(isAuthenticated);
            window.alert(res.data.message)
        } catch (error) {
            console.log("ERROR", error.response.data.message);
            window.alert("ERROR", error.response.data.message)
        }
    };

    useEffect(() => {
       async function checkLogin() {
            const cookies = Cookies.get();

        if (!cookies.token) {
            setIsAuthenticated(false);
            setLoading(false);
            return setUser(null);
        }

        console.log(loading, isAuthenticated);
            try {
                const res = await verifyTokenRequest(cookies.token)
                if (!res.data) {
                    setIsAuthenticated(false);
                    setLoading(false);
                    return;
                }

                setIsAuthenticated(true);
                setUser(res.data);
                setLoading(false);

                console.log(loading, isAuthenticated);

            } catch (error) {
                setIsAuthenticated(false);
                setUser(null);
                setLoading(false);
            }
        };

        checkLogin();

    }, [])

    return (
        <AuthContext.Provider
            value={{
                signup,
                signin,
                user,
                isAuthenticated,
                loading,
            }}>
            {children}
        </AuthContext.Provider>
    )
}