import { FC } from "react";

const Login: FC = () => {
  return (
    <>
      <h1>Credential Login</h1>
      <article>
        <form>
          <input
            type="email"
            name="email"
            placeholder="Email"
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
          <button type="submit">Submit</button>
        </form>
      </article>
      <h1>Social Login</h1>
      <article>
        <div style={{ display: "flex", gap: "2rem" }}></div>
        <a href="/api/login/oauth/github">
          <svg width="90" height="90">
            <image
              xlinkHref="logos/github-mark-white.svg"
              width="90"
              height="90"
            />
          </svg>
        </a>
      </article>
    </>
  );
};
export default Login;
