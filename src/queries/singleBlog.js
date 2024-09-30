export const singleBlog = `query SingleBlog($blogId: ID) {
  blog(where: {id: $blogId}) {
    author
    category
    content
    images {
      url
    }
    releaseDate
    title
  }
}`;
