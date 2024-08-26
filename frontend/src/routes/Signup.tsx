import { FC } from "react";

const Signup: FC = () => {
  return (
    <>
      <h1>Credential Signup</h1>
      <form action="">
        <input
          type="text"
          name="name"
          placeholder="Name"
          minLength={1}
          required
        />
        <input
          type="email"
          name="name"
          placeholder="Name"
          pattern=".+@.+"
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          minLength={1}
          required
        />
        <input
          type="password"
          name="passwordConfirm"
          placeholder="Password Confirmation"
          minLength={1}
          required
        />
        <button type="submit">Signup</button>
      </form>
    </>
  );
};

export default Signup;
