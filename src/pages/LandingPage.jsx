import { Card } from "../components/Card/Card";
import { Wrapper } from "../components/Wrapper/Wrapper";
import { useGraphFetch } from "../hooks/useGraphFetch"
import { allBlogs } from "../queries/allBlogs";

export const LandingPage = () => {
  const {data, isLoading, error} = useGraphFetch(undefined, "VITE_PUBLIC_API_KEY", allBlogs);

  console.log(data?.blogs);
  
  return (
    <Wrapper>
      <Card data={data?.blogs}/>
    </Wrapper>
  )
}