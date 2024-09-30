export const blogCategory = `query BlogCategory($categoryName: String!) {
  blogs(where: {category: $categoryName}) {
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
