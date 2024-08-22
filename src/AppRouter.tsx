import { createBrowserRouter } from 'react-router-dom';
import LandingPage from './pages/Landing/LandingPage';
import MusicExplorer from './pages/MusicExplorer/MusicExplorer';
import ErrorPage from './pages/Error/ErrorPage';

const AppRouter = createBrowserRouter([
  {
    path: '/',
    element: <LandingPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/music-explorer',
    element: <MusicExplorer />,
  },
]);

export default AppRouter;
