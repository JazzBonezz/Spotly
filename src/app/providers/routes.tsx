import {createBrowserRouter} from "react-router";
import {ROUTES} from "@/app/constants";
import {Layout} from "@/app/layout";



const routes = createBrowserRouter([
    {
        path: ROUTES.LAYOUT,
        element: <Layout />,
        children: [
            {

            },
        ],
    },
]);

export default routes;