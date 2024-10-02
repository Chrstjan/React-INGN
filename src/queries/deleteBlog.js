export const deleteBlog = `mutation DeleteBlog ($blogID: ID!) {
  deleteBlog(where: {id: $blogID}) {
    id
  }
}`;
