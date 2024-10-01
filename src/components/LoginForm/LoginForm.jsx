import style from "./LoginForm.module.scss";

export const LoginForm = ({ user }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.username.value);
    console.log(e.target.password.value);
  };

  return (
    <div className={style.containerStyling}>
      <h2>Log ind</h2>
      <form className={style.formStyling} onSubmit={(e) => handleSubmit(e)}>
        <label htmlFor="username">Brugernavn:</label>
        <input type="text" name="username" />
        <label htmlFor="password">Password:</label>
        <input type="password" name="password" />

        <input type="submit" value="Log ind" />
      </form>
    </div>
  );
};
