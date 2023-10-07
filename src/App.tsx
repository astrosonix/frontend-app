import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import Root from "./Root.tsx";
import LandingPage from "./pages/LandingPage/LandingPage.tsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        children: [
            {
                path: "/",
                element: <LandingPage />
            },
        ],
    },
]);

function App() {
  return (
      <RouterProvider router={router} />
  )
}

export default App
