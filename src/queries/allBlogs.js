export const allBlogs = `query AllBlogs {
  blogs (first: 100) {
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