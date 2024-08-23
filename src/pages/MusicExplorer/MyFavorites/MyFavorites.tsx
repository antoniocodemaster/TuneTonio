import { useEffect } from 'react';
import useMusicExplorerStore from '../../../shared/store/MusicExplorerStore';
import { Typography } from '@mui/material';
import AlbumsList from '../../../shared/components/AlbumsList';

const MyFavorites = () => {
  const { favorites, getFavoritesFromLocalStorage } = useMusicExplorerStore();

  useEffect(() => {
    getFavoritesFromLocalStorage();
  }, []);

  return (
    <>
      <Typography>My Favorites</Typography>
      <AlbumsList albums={favorites}/>
    </>
  );
};

export default MyFavorites;
