import { useEffect } from 'react';
import useMusicExplorerStore from '../../../shared/store/MusicExplorerStore';
import { Box, Button, Typography } from '@mui/material';
import AlbumsList from '../../../shared/components/AlbumsList';

const MyFavorites = () => {
  const { favorites, getFavoritesFromLocalStorage, clearFavorites } =
    useMusicExplorerStore();

  useEffect(() => {
    getFavoritesFromLocalStorage();
  }, []);

  return (
    <Box className="favorites">
      <Box className="flex sm:flex-row flex-col">
        <Typography variant="h2">My Favorites</Typography>
        <Button
          className="btn-red clear"
          onClick={() => {
            clearFavorites();
          }}
        >
          Clear Favorites
        </Button>
      </Box>

      <AlbumsList albums={favorites} />
    </Box>
  );
};

export default MyFavorites;
