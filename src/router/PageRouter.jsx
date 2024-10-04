import { Routes, Route } from "react-router-dom";
import { Paths } from "./Paths";
import { MainLayout } from "../Layouts/MainLayout";
import { LandingPage } from "../pages/LandingPage";
import { ArticlePage } from "../pages/ArticlePage";
import { CategoryPage } from "../pages/CategoryPage";
import { LoginPage } from "../pages/LoginPage";
import { useState } from "react";
import { EditPage } from "../pages/EditPage";

export const PageRouter = () => {
  //Laver en state til at gemme om brugeren er logget ind som admin
  const [user, setUser] = useState();
  return (
    <Routes>
      <Route path={Paths.home} element={<MainLayout />}>
        <Route index element={<LandingPage />} />
        <Route path={Paths.blogPost} element={<ArticlePage user={user} />} />
        <Route path={Paths.categoryPage} element={<CategoryPage />} />
        <Route
          path={Paths.login}
          element={<LoginPage setUser={setUser} user={user} />}
        />
        <Route path={Paths.editPage} element={<EditPage user={user} />} />
        <Route path={Paths.pageNotFound} element={<h2>404 not found...</h2>} />
      </Route>
    </Routes>
  );
};
