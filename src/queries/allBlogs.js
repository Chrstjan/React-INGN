export const allBlogs = `query AllBlogs {
  blogs {
    author
    category
    releaseDate
    subTitle
    title
    images {
      url
    }
    content {
      markdown
    }
  }
}`