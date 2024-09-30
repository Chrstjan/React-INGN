import { useParams } from "react-router-dom";
import { useGraphFetch } from "../hooks/useGraphFetch";
import { Wrapper } from "../components/Wrapper/Wrapper";
import { singleBlog } from "../queries/singleBlog";
import { Card } from "../components/Card/Card";

export const ArticlePage = () => {
  const { blogId } = useParams();
  const { data, isLoading, error } = useGraphFetch(
    undefined,
    "VITE_PUBLIC_API_KEY",
    singleBlog,
    "blogId",
    blogId
  );

  console.log(blogId);

  console.log("Blog:", data);

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  if (error) {
    return <h2>Error: {error.message}</h2>;
  }

  return <Wrapper>{<Card data={[data?.blog]} />}</Wrapper>;
};
