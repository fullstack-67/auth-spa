import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./routes/login";
const router = createBrowserRouter([
  {
    path: "/",
    element: <h1>Yes</h1>,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
