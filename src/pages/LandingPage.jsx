import { Card } from "../components/Card/Card";
import { Wrapper } from "../components/Wrapper/Wrapper";
import { useGraphFetch } from "../hooks/useGraphFetch"
import { allBlogs } from "../queries/allBlogs";

export const LandingPage = () => {
  const {data, isLoading, error} = useGraphFetch(undefined, "VITE_PUBLIC_API_KEY", allBlogs);

  console.log(data?.blogs);

  if (isLoading) {
    return <h2>Loading...</h2>
  }

  if (error) {
    return <h2>Error in fetch: {error.message}</h2>
  }

  const filteredData = data?.blogs.map(blog => ({
    ...blog,
    content: blog.content.slice(0, 110) + (blog.content.length > 20 ? '...' : '')
  }));
  
  return (
    <Wrapper>
      <Card data={filteredData}/>
    </Wrapper>
  )
}