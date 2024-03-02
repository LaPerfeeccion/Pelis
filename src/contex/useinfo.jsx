import { createContext, useContext, useEffect, useState } from "react";

const Infocontext = createContext()
export const useInfo = () => useContext(Infocontext);

export function InfoProvider({ children }) {
    const [info, setinfo] = useState()
    useEffect(() => {
        if (localStorage.getItem("info")) {
            const infolocal = JSON.parse(localStorage.getItem("info"))
            setinfo(infolocal)
        } else {
            localStorage.setItem("info", JSON.stringify({}))
        }
    }, []);
    const updateinfo = (data) => {
        localStorage.setItem("info", JSON.stringify(data));
        setinfo(data);
    };

    return (
        <Infocontext.Provider value={{ info, updateinfo }}>
            {children}
        </Infocontext.Provider>
    );
};

