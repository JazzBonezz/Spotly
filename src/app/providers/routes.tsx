import {createBrowserRouter} from "react-router";
import {ROUTES} from "@/app/constants";
import {Layout} from "@/app/layout";
import {HomePage} from "@/pages/homePage";
import {AboutPage} from "@/pages/aboutUs";
import {BookingPage} from "@/pages/bookingPage";



const routes = createBrowserRouter([
    {
        path: ROUTES.LAYOUT,
        element: <Layout />,
        children: [
            {
                path: ROUTES.HOME,
                element: <HomePage/>
            },
            {
                path: ROUTES.ABOUT,
                element: <AboutPage/>
            },
            {
                path: ROUTES.BOOKING,
                element: <BookingPage/>
            }
        ],
    },
]);

export default routes;