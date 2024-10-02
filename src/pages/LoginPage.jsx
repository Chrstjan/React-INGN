import { LoginForm } from "../components/LoginForm/LoginForm";
import { Wrapper } from "../components/Wrapper/Wrapper";

export const LoginPage = ({ setUser, user }) => {
  return (
    <Wrapper>
      <LoginForm user={user} setUser={setUser} />
    </Wrapper>
  );
};
