import style from "./EditForm.module.scss";

export const EditForm = ({ callback, data }) => {
  return (
    <div className={style.formStyling}>
      <h2>Upload / Edit blog</h2>
      <form onSubmit={(e) => callback(e)}>
        <label htmlFor="title">Title</label>
        <input type="text" defaultValue={data.title} name="title" />
        <label htmlFor="content">Content</label>
        <textarea name="content" defaultValue={data.content}></textarea>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};
