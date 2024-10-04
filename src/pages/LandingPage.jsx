import { Card } from "../components/Card/Card";
import { Wrapper } from "../components/Wrapper/Wrapper";
import { useGraphFetch } from "../hooks/useGraphFetch";
import { allBlogs } from "../queries/allBlogs";

export const LandingPage = () => {
  //Bruger et hook jeg har lavet til at fetch data fra hypgraph
  const { data, isLoading, error } = useGraphFetch(
    undefined,
    "VITE_PUBLIC_API_KEY",
    allBlogs
  );

  console.log(data);

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  if (error) {
    return <h2>Error in fetch: {error.message}</h2>;
  }


//Bruger en Map method på dataen fra api'en. Laver en kopi med spread operatoren til at modifecere.
// Vælger content key og bruger en .slice method til at vælge de første 110 tegn
// Og bruger length til at chekke om length er større end 20. Når den er tilføjer den tre prikker til at lave en read more tekst
//Gemmer kopien i filteredData variable jeg bruger til at mappe content ud til dom
  const filteredData = data?.blogs.map((blog) => ({
    ...blog,
    content:
      blog.content.slice(0, 110) + (blog.content.length > 20 ? "..." : ""),
  }));

  return (
    <Wrapper gridStyling="articleGrid">
      <Card data={filteredData} cardStyling="gridCard"/>
    </Wrapper>
  );
};
