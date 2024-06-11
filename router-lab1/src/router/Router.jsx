import ReactDOM from 'react-dom/client'
// import './index.css'
import {createBrowserRouter,RouterProvider,} from "react-router-dom";
// import Nav from "../components/Nav.jsx"
import Home from '../pages/Home.jsx'
import Bootcamp from '../pages/Bootcamp.jsx'
// import Login from '../pages/Login.jsx'
// import Error from './component/Error'
const router = createBrowserRouter([
    {
      path: "./home",
      element: <Home />,
    },
    {
      path: "./bootcamp",
      element: <Bootcamp />,
    }
]);
function Router() {
    return(
        ReactDOM.createRoot(document.getElementById('root')).render(
            
        <RouterProvider router={router} />
            
    )
)
}
export default Router