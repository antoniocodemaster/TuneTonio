import { createBrowserRouter } from 'react-router-dom';
import LandingPage from './pages/Landing/LandingPage';
import MusicExplorer from './pages/MusicExplorer/MusicExplorer';
import ErrorPage from './pages/Error/ErrorPage';
import Search from './pages/MusicExplorer/Search';
import Albums from './pages/MusicExplorer/Albums';
import SingleAlbum from './pages/MusicExplorer/SingleAlbum';

const AppRouter = createBrowserRouter([
  {
    path: '/',
    element: <LandingPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/music-explorer',
    element: <MusicExplorer />,
    children: [
      { element: <Search />, index: true },
      { element: <Albums />, path: 'albums' },
      { element: <SingleAlbum />, path: 'albums/:id' },
    ],
  },
]);

export default AppRouter;
