import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import { Box, Typography } from '@mui/material';

const AllAlbums = () => {
  const { artist } = useParams<{ artist: string }>();

  const [albums, setAlbums] = useState([]);

  const fetchAlbums = async () => {
    try {
      const response = await axios.get(
        `https://www.theaudiodb.com/api/v1/json/2/searchalbum.php?s=${artist}`
      );
      console.log('response:', response.data.album);
      setAlbums(response.data.album);
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  useEffect(() => {
    fetchAlbums();
  }, []);

  return (
    <>
      <Typography variant="h2">Albums</Typography>

      <Box>
        {albums.map((album) => (
          <Box key={album.idAlbum}>
            <Link to={`/music-explorer/albums/single/${album.idAlbum}`}>
              {album.strAlbum}
            </Link>
          </Box>
        ))}
      </Box>
    </>
  );
};

export default AllAlbums;
