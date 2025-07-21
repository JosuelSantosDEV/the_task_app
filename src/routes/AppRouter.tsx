import { lazy } from "react";
import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";


const Home  = lazy(() => import("../pages/Home"));
const Tasks = lazy(() => import("../pages/Tasks"));
const MainLayout = lazy(() => import("../layouts/MainLayout"));
const Page404 = lazy(() => import("../pages/Page404"));

export const AppRouter = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route element={<MainLayout/>} >
                <Route path="/" element={<Home/>}/>
                <Route path="/tasks" element={<Tasks/>}/>
                <Route path="*" element={<Page404/>}/>
            </Route>
        </>
    )
);