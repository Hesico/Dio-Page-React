import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";

import Button from "./components/Button";
import Home from "./pages/home";
import Login from "./pages/login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "login",
    element: <Login/>
  },
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
