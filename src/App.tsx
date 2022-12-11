import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Home from "./pages/home";
import Login from "./pages/login";
import Feed from "./pages/feed"
import Register from "./pages/register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "login",
    element: <Login/>
  },
  {
    path: "feed",
    element: <Feed/>
  },
  {
    path: "register",
    element: <Register/>
  },
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
