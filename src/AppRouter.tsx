import { createBrowserRouter } from 'react-router-dom';
import LandingPage from './pages/Landing/LandingPage';
import MusicExplorer from './pages/MusicExplorer/MusicExplorer';
import ErrorPage from './pages/Error/ErrorPage';
import Search from './pages/MusicExplorer/Search';
import Albums from './pages/MusicExplorer/Albums/Albums';
import MyFavorites from './pages/MusicExplorer/MyFavorites/MyFavorites';

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
      { element: <Albums/>, path: 'albums/all/:artist' },
      { element: <MyFavorites />, path: 'my-favorites' },
    ],
  },
]);

export default AppRouter;
