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
  //BlogId kommer fra url'en der bliver sendt afsted fra en anden page
  const { blogId } = useParams();

  //Bruger useQueryClient til at kunne clear cache når vi køre edit og update muatation
  const queryClient = useQueryClient();

  const { data, isLoading, error } = useGraphFetch(
    undefined,
    "VITE_PUBLIC_API_KEY",
    singleBlog,
    "blogId",
    blogId
  );

  console.log(data);

  //Bruger en mutation fra graphql til at opdatere artikler ved hjælp af blogId url param
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
    //Når edit muation går igennem kører den der mutation for at ændre det fra draft til at blive published
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


  /*
  Funktion der kører når man sender sin edit form afsted til hygraph.
  Den henter title og content fra de tilsvarende input felter og gemmer dem i to variabler.

  Derefter checker den om title og content variablerne er true (),
  Hvis de er det laver den et object hvor den, og sender mutationen afsted med det objekt
  */
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
