// import './index.css'
import {createBrowserRouter,RouterProvider,} from "react-router-dom";
// import Nav from "../components/Nav.jsx"
import Home from '../pages/Home.jsx'
import Bootcamp from '../pages/Bootcamp.jsx'
import Login from '../pages/Login.jsx'
// import Error from './component/Error'

function Router() {
        const router = createBrowserRouter([
            {
              path: "/",
              element: <Home />,
            },
            {
              path: "/Home",
              element: <Home />,
            },
            {
              path: "/Bootcamp",
              element: <Bootcamp />,
            },
            {
               path: "/Login",
               element: <Login />,
            }
        ]);
        return(
        <RouterProvider router={router} />      
    )
}
export default Router