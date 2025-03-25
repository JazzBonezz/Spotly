import {RouterProvider} from "react-router";
import routes from "@/app/providers/routes.tsx";


const App = () => {
    return (
        <RouterProvider router={routes}/>
    );
};

export default App;