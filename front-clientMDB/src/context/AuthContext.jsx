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
        try {
            const res = await axios.post('/register', user);
            setUser(res.data);
            setIsAuthenticated(true);
        } catch (error) {
            console.log("ERROR", error.response.data.message);
        }
    }

    const signin = async (user) => {
        try {
            const res = await axios.post('/login', user);
            setIsAuthenticated(true);
            setUser(res.data.user);
            window.alert(res.data.message)

        } catch (error) {
            console.log("ERROR", error.response.data.message);
            window.alert("ERROR", error.response.data.message)
        }
    };

    //puedo usar la funcion de logout desde el backend
    // const logout = async () => {
    //     try {

    //     } catch (error) {
    //         console.log(error)
    //     }
    // }

    const logout = () => {
        Cookies.remove("token");
        setIsAuthenticated(false);
        setUser(null);
    }

    useEffect(() => {
        async function checkLogin() {
            const cookies = Cookies.get();

            if (!cookies.token) {
                setIsAuthenticated(false);
                setLoading(false);
                return setUser(null);
            }
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
                logout,
                user,
                isAuthenticated,
                loading,
            }}>
            {children}
        </AuthContext.Provider>
    )
}