import { Routes, Route } from "react-router-dom";
import { Paths } from "./Paths";
import { MainLayout } from "../Layouts/MainLayout";
import { LandingPage } from "../pages/LandingPage";

export const PageRouter = () => {
  return (
    <Routes>
      <Route path={Paths.home} element={<MainLayout />}>
        <Route index element={<LandingPage />} />
        <Route path={Paths.pageNotFound} element={<h2>404 not found...</h2>} />
      </Route>
    </Routes>
  );
};
