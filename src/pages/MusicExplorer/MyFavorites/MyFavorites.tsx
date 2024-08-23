import { useEffect } from 'react';
import useMusicExplorerStore from '../../../shared/store/MusicExplorerStore';
import { Button, Typography } from '@mui/material';
import AlbumsList from '../../../shared/components/AlbumsList';

const MyFavorites = () => {
  const { favorites, getFavoritesFromLocalStorage, clearFavorites } =
    useMusicExplorerStore();

  useEffect(() => {
    getFavoritesFromLocalStorage();
  }, []);

  return (
    <>
      <Typography>My Favorites</Typography>
      <Button
        onClick={() => {
          clearFavorites();
        }}
      >
        Clear Favorites
      </Button>
      <AlbumsList albums={favorites} />
    </>
  );
};

export default MyFavorites;
