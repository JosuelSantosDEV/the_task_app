import { RouterProvider } from "react-router-dom";
import { AppRouter } from "../routes/AppRouter";

export const AppRouterProvider = () => {
    return <RouterProvider router={AppRouter} />;
};