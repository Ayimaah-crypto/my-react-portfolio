import { createBrowserRouter, RouterProvider, } from "react-router";
import Portfolio from "./pages/Portfolio";

const myReactPortfolioRouter = createBrowserRouter([
    { path: '/', element: <Portfolio /> },
]);

export default function App() {
    return (
        <>
            <RouterProvider router={myReactPortfolioRouter} />
        </>
    )
};

 
