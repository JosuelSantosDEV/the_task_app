import { lazy } from "react";
import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";

// Layouts
const HomeLayout = lazy(() => import("../layouts/HomeLayout"));
const MainLayout = lazy(() => import("../layouts/MainLayout"));

// Pages
const Home = lazy(() => import("../pages/Home"));
const Tasks = lazy(() => import("../pages/Tasks"));
const Page404 = lazy(() => import("../pages/Page404"));
const Login = lazy(() => import("../pages/Auth/Login"));
const Register = lazy(() => import("../pages/Auth/Register"));
const Main = lazy(() => import("../pages/Main"));

export const AppRouter = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Main />} />
        <Route path="auth/login" element={<Login />} />
        <Route path="auth/register" element={<Register />} />
      </Route>

      <Route path="/home" element={<HomeLayout />}>
        <Route index element={<Home />} />
        <Route path="tasks" element={<Tasks />} />
      </Route>

      <Route path="*" element={<Page404 />} />
    </>
  )
);
