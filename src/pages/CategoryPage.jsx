import { useParams } from "react-router-dom";
import { useGraphFetch } from "../hooks/useGraphFetch";
import { blogCategory } from "../queries/blogCategory";

export const CategoryPage = () => {
  const { categoryName } = useParams();

  const { data, isLoading, error } = useGraphFetch(
    undefined,
    "VITE_PUBLIC_API_KEY",
    blogCategory,
    "categoryName",
    categoryName
  );

  console.log(data);

  return <div>CategoryPage</div>;
};
