export const editBlog = `mutation EditBlog ($id: ID!, $content: String!, $title: String!) {
  updateBlog(data: {content: $content, title: $title}, where: {id: $id}) {
    id
  }
}`;
