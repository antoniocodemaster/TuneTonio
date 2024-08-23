import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Typography } from '@mui/material';
import axios from 'axios';

const SingleAlbum = () => {
  const { albumId } = useParams();

  const [album, setAlbum] = useState();

  const fetchSingleAlbum = async () => {
    try {
      const response = await axios.get(
        `https://www.theaudiodb.com/api/v1/json/2/album.php?m=${albumId}}`
      );
      console.log('response:', response.data);
      setAlbum(response.data.album[0]);
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

useEffect(() => {
  fetchSingleAlbum();
}, [])


  return (
    <>
      <Typography variant='h2'>{album?.strAlbum} by {album?.strArtist}</Typography>
    </>
  );
};

export default SingleAlbum;
