import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Home from "./pages/home";
import Login from "./pages/login";
import Feed from "./pages/feed"

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
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
