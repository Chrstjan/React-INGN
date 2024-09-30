export const allBlogs = `query AllBlogs {
  blogs {
    author
    category
    releaseDate
    subTitle
    title
    content
    images {
      url
    }
  }
}`