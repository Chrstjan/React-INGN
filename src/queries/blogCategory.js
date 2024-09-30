export const blogCategory = `query BlogCategory($categoryName: STRING) {
  blogs(where: {category_contains: categoryName}) {
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
