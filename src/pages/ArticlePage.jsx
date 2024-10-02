import { useParams } from "react-router-dom";
import { useGraphFetch } from "../hooks/useGraphFetch";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { request } from "graphql-request";
import { deleteBlog } from "../queries/deleteBlog";
import { Wrapper } from "../components/Wrapper/Wrapper";
import { singleBlog } from "../queries/singleBlog";
import { Card } from "../components/Card/Card";

export const ArticlePage = ({ user }) => {
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

  const queryClient = useQueryClient();

  const deleteMutation = useMutation({
    mutationFn: async (id) =>
      request({
        url: import.meta.env.VITE_PUBLIC_API_KEY,
        document: deleteBlog,
        variables: { blogID: id },
        requestHeaders: { Authorization: `Bearer ${user.token}` },
      }),
    onSuccess: () => {
      console.log("Delete mutation successful");
      console.log("Blog deleted");
      queryClient.invalidateQueries({ queryKey: [singleBlog, "allBlogs"] });
    },
  });

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  if (error) {
    return <h2>Error: {error.message}</h2>;
  }

  const hideReadMore = true;

  return (
    <Wrapper>
      {
        <Card
          data={[data?.blog]}
          hideReadMore={hideReadMore}
          cardStyling="singleArticle"
          user={user}
          action={deleteMutation}
        />
      }
    </Wrapper>
  );
};
