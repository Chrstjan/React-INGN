import style from "./LoginForm.module.scss";

export const LoginForm = ({ user, setUser }) => {
  const submitForm = (e) => {
    e.preventDefault();

    let username = e.target.username.value;
    let password = e.target.password.value;

    let body = JSON.stringify({ username: username, password: password });

    if (username && password) {
      fetch("http://localhost:3000/signin", {
        method: "POST",
        body: body,
        headers: { "Content-type": "application/json" },
      })
        .then((res) => res.json())
        .then((data) =>
          data?.token
            ? setUser(data)
            : console.error(`Forkert password eller nåe igåh!?`)
        );
    }
  };

  const signOut = () => {
    setUser(null);
  };

  return (
    <div className={style.containerStyling}>
      {!user ? (
        <>
          <h2>Log ind</h2>
          <form className={style.formStyling} onSubmit={(e) => submitForm(e)}>
            <label htmlFor="username">Brugernavn:</label>
            <input type="text" name="username" />
            <label htmlFor="password">Password:</label>
            <input type="password" name="password" />

            <input type="submit" value="Log ind" />
          </form>
        </>
      ) : (
        <button onClick={() => signOut()}>Log ud</button>
      )}
    </div>
  );
};
