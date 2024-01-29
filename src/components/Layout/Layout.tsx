import Header from "../Header/Header.tsx";
import {FC, PropsWithChildren} from "react";

const Layout: FC<PropsWithChildren> = ({children}) => {
    return (
        <>
            <Header/>
            {children}
        </>
    );
};

export default Layout;