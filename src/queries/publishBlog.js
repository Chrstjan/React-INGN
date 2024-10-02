export const publishBlog = `mutation MyMutation ($id: ID!) {
  publishBlog(where: {id: $id}) {
    id
  }
}`;
