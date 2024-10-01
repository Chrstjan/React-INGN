import { Routes, Route } from "react-router-dom";
import { Paths } from "./Paths";
import { MainLayout } from "../Layouts/MainLayout";
import { LandingPage } from "../pages/LandingPage";
import { ArticlePage } from "../pages/ArticlePage";
import { CategoryPage } from "../pages/CategoryPage";
import { LoginPage } from "../pages/LoginPage";

export const PageRouter = () => {
  return (
    <Routes>
      <Route path={Paths.home} element={<MainLayout />}>
        <Route index element={<LandingPage />} />
        <Route path={Paths.blogPost} element={<ArticlePage />} />
        <Route path={Paths.categoryPage} element={<CategoryPage />} />
        <Route path={Paths.login} element={<LoginPage />} />
        <Route path={Paths.pageNotFound} element={<h2>404 not found...</h2>} />
      </Route>
    </Routes>
  );
};
