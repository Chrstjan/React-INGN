export const allBlogs = `query AllBlogs {
  blogs {
    author
    category
    releaseDate
    title
    content,
    id
    images {
      url
    }
  }
}`