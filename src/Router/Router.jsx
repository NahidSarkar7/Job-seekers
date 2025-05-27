import {
  createBrowserRouter,
} from "react-router";
import Home from "../Pages/Home/Home";
import Root from "../RootLayout/Root";
import Register from "../Authentication/Register";
import Login from "../Authentication/Login";

const Router = createBrowserRouter([
  {
    path: "/",
    Component:Root,
    children:[
        {
            index:true,
            Component:Home,
        },
        {
            path:'about',
            element:<p>This is about page</p>
        },
        {
            path:'register',
            Component:Register
        },
        {
            path:'login',
            Component:Login
        },
    ]
  },
]);

export default Router;