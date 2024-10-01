export const blogCategory = `query BlogCategory($categoryName: String!) {
  blogs(where: {category: $categoryName}) {
    author
    category
    content
    id
    images {
      url
    }
    releaseDate
    title
  }
}`;
