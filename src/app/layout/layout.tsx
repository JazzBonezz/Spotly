import {ThemeProvider} from "styled-components";
import {GlobalStyles, lightTheme} from "@shared/styles";
import {Outlet} from "react-router";
import {Header} from "@/widgets/header";


export const Layout = () => {
    return (
        <div>
            <ThemeProvider theme={lightTheme}>
                <GlobalStyles/>
                <Header/>
                <Outlet/>
            </ThemeProvider>
        </div>
    );
};
