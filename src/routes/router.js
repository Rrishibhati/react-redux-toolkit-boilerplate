
import { RouterProvider, createBrowserRouter } from "react-router-dom"
import App from "../app"
import Error from "../error"
import Home from "../home/home"

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <Error />,
        children: [
            {
                path: '/',
                element: <Home />
            }
        ]
    }
])

export default AppRoute = () => <RouterProvider router={router} />