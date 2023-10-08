import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import Root from "./Root.tsx";
import LandingPage from "./pages/LandingPage/LandingPage.tsx";
import ImageSourceSelectionPage from "./pages/ImageSourceSelectionPage/ImageSourceSelectionPage.tsx";
import SoundStylePage from "./pages/SoundStylePage/SoundStylePage.tsx";
import GeneratePage from "./pages/GeneratePage/GeneratePage.tsx";
import PlayerPage from "./pages/PlayerPage/PlayerPage.tsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        children: [
            {
                path: "/",
                element: <LandingPage />
            },
            {
                path: "/app/image-source",
                element: <ImageSourceSelectionPage />
            },
            {
                path: "/app/sound-style",
                element: <SoundStylePage />
            },
            {
                path: "/app/generate",
                element: <GeneratePage />
            },
            {
                path: "/app/player",
                element: <PlayerPage />
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
