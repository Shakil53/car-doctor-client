import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/Sing up/SignUp";
import Checkout from "../Pages/CheckOut/Checkout";



const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
            },
            {
                path: 'login',
                element: <Login></Login>
            },
            {
                path: 'signup',
                element: <SignUp></SignUp>
            },
            {
                path: 'checkout/:id',
                element: <Checkout></Checkout>,
                loader: ({ params }) => fetch(`https://car-doctor-server-psi-beryl.vercel.app/services/${params.id}`)


            }
        ]
    },
]);




export default router