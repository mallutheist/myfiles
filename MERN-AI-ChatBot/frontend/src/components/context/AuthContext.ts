import { ReactNode, createContext, useEffect, useState } from "react";

type User = {
    name: string
    email: string

}

type userAuth = {
    IsLoggedIn: boolean
    user: User | null;
    login: (email: string, password: string) => Promise<void>;
    signup: (name: string, email: string, password: string) => Promise<void>;
    logout: () => Promise<void>;
}

const AuthContext = createContext<userAuth | null>(null)
const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [user, setUser] = useState<User | null>(null)
    const [IsLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {

    }, []);

}