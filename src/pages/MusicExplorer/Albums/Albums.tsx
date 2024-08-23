import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Typography } from '@mui/material';
import { getAlbumsByArtist } from '../../../core/services/api/theaudiodbApi';
import Album from '../../../core/entities/Album';
import AlbumsList from '../../../shared/components/AlbumsList';
import useMusicExplorerStore from '../../../shared/store/MusicExplorerStore';

const Albums = () => {
  const { artist } = useParams<{ artist: string }>();
  const [albums, setAlbums] = useState<Album[]>([]);
  const { getFavoritesFromLocalStorage } = useMusicExplorerStore();

  const fetchAlbums = async () => {
    if (artist) {
      try {
        const albums = await getAlbumsByArtist(artist);
        setAlbums(albums);
        getFavoritesFromLocalStorage();
      } catch (error) {
        console.error('Error fetching albums:', error);
      }
    }
  };

  useEffect(() => {
    fetchAlbums();
  }, []);

  return (
    <>
      <Typography variant="h2">Albums</Typography>

      <AlbumsList albums={albums} />
    </>
  );
};

export default Albums;
