import { FC } from "react";
import { Outlet } from "react-router-dom";
import Nav from "../components/Nav";
const Layout: FC = () => {
  return (
    <div className="container">
      <header>
        <Nav />
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
