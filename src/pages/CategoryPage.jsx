import { useParams } from "react-router-dom";
import { useGraphFetch } from "../hooks/useGraphFetch";
import { blogCategory } from "../queries/blogCategory";
import { useEffect } from "react";
import { Wrapper } from "../components/Wrapper/Wrapper";

export const CategoryPage = () => {
  const { categoryName } = useParams();

  const { data, isLoading, error } = useGraphFetch(
    undefined,
    "VITE_PUBLIC_API_KEY",
    blogCategory,
    "categoryName",
    categoryName
  );

  if (error) {
    console.log(error.message);
  }

  console.log(data);

  useEffect(() => {
    console.log(categoryName);
  }, [categoryName]);

  return <Wrapper></Wrapper>;
};
