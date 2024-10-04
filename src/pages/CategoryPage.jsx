import { useParams } from "react-router-dom";
import { useGraphFetch } from "../hooks/useGraphFetch";
import { blogCategory } from "../queries/blogCategory";
import { Wrapper } from "../components/Wrapper/Wrapper";
import { Card } from "../components/Card/Card";

export const CategoryPage = () => {
    //categoryName kommer fra url'en der bliver sendt afsted fra en anden page
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

  //Bruger en Map method på dataen fra api'en. Laver en kopi med spread operatoren til at modifecere.
  // Vælger content key og bruger en .slice method til at vælge de første 110 tegn
  // Og bruger length til at chekke om length er større end 20. Når den er tilføjer den tre prikker til at lave en read more tekst
  //Gemmer kopien i filteredData variable jeg bruger til at mappe content ud til dom
  const filteredData = data?.blogs.map(blog => ({
    ...blog,
    content: blog.content.slice(0, 110) + (blog.content.length > 20 ? '...' : '')
  }));

  return <Wrapper>
    {filteredData ? <Card data={filteredData} cardStyling="categoryCard"/>: null}
  </Wrapper>;
};
