import { useParams } from "react-router-dom";
import { useGraphFetch } from "../hooks/useGraphFetch";
import { singleBlog } from "../queries/singleBlog";
import request from "graphql-request";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { editBlog } from "../queries/editBlog";
import { publishBlog } from "../queries/publishBlog";
import { Wrapper } from "../components/Wrapper/Wrapper";
import { EditForm } from "../components/EditForm/EditForm";

export const EditPage = ({ user }) => {
  const { blogId } = useParams();

  const queryClient = useQueryClient();

  const { data, isLoading, error } = useGraphFetch(
    undefined,
    "VITE_PUBLIC_API_KEY",
    singleBlog,
    "blogId",
    blogId
  );

  console.log(data);

  const updateMutation = useMutation({
    mutationFn: async (data) =>
      request({
        url: import.meta.env.VITE_PUBLIC_API_KEY,
        document: editBlog,
        variables: {
          ...data,
          id: blogId,
        },

        requestHeaders: { Authorization: "Bearer " + user.token },
      }),
    onError: (err) => {
      console.error(err);
    },
    onSuccess: () => {
      console.log("mutation succesful");
      queryClient.invalidateQueries();
    },
    onSettled: async () => {
      request({
        url: import.meta.env.VITE_PUBLIC_API_KEY,
        document: publishBlog,
        variables: {
          id: blogId,
        },

        requestHeaders: { Authorization: "Bearer " + user.token },
      });
    },
  });

  if (error) {
    return <h2>Error in fetch: {error.message}</h2>;
  }

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  const updateBlogSubmit = (e) => {
    e.preventDefault(e);
    const title = e.target.title.value;
    const content = e.target.content.value;

    if (title && content) {
      const data = { title: title, content: content };
      updateMutation.mutate(data);
    }
  };

  return (
    <Wrapper>
      <EditForm callback={updateBlogSubmit} data={data?.blog} />
    </Wrapper>
  );
};
