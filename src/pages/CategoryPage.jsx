import { useParams } from "react-router-dom";
import { useGraphFetch } from "../hooks/useGraphFetch";
import { blogCategory } from "../queries/blogCategory";
import { Wrapper } from "../components/Wrapper/Wrapper";
import { Card } from "../components/Card/Card";

export const CategoryPage = () => {
  const { categoryName } = useParams();

  const { data, isLoading, error } = useGraphFetch(
    undefined,
    "VITE_PUBLIC_API_KEY",
    blogCategory,
    "categoryName",
    categoryName
  );

  if (isLoading) {
    return <h2>Loading...</h2>
  }

  if (error) {
    console.log(error.message);
  }

  const filteredData = data?.blogs.map(blog => ({
    ...blog,
    content: blog.content.slice(0, 110) + (blog.content.length > 20 ? '...' : '')
  }));

  return <Wrapper>
    {filteredData ? <Card data={filteredData} />: null}
  </Wrapper>;
};
