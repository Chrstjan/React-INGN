export const singleBlog = `query SingleBlog {
  blog(where: {id: ""}) {
    author
    category
    content
    images {
      url
    }
    releaseDate
    title
  }
}`