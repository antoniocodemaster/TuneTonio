import { Box, Button, TextField, Typography } from '@mui/material';
import { useForm, Controller } from 'react-hook-form';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import FormSearchData from '../../core/entities/FormSearchData';
import { searchArtists } from '../../core/services/api/theaudiodbApi';
import Artist from '../../core/entities/Artist';

const Search = () => {
  const [searchResults, setSearchResults] = useState<Artist[]>([]);

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FormSearchData>();

  const onSubmit = async (data: FormSearchData) => {
    try {
      const artists = await searchArtists(data);
      setSearchResults(artists);
    } catch (error) {
      console.error('Error fetching artists:', error);
    }
  };

  return (
    <>
      <Typography variant="h2">What do you want to listen to?</Typography>
      <Box
        component="form"
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit(onSubmit)}
        sx={{ mt: 3, display: 'flex', flexDirection: 'column', gap: 2 }}
      >
        <Controller
          name="artist"
          control={control}
          defaultValue=""
          rules={{ required: 'You must enter an artist name or some keyword' }}
          render={({ field }) => (
            <TextField
              {...field}
              label="Search Artist"
              variant="outlined"
              fullWidth
              error={!!errors.artist}
              helperText={errors.artist ? errors.artist.message : ''}
            />
          )}
        />
        <Button
          variant="contained"
          className="btn-primary"
          type="submit"
          sx={{ alignSelf: 'flex-end' }}
        >
          Submit
        </Button>
      </Box>

      <h3>Search Results!</h3>
      <Box>
        {searchResults.map((artist) => (
          <Box key={artist.idArtist}>
            <Typography variant="h4">
              <Link to={`/music-explorer/albums/all/${artist.strArtist}`}>
                {artist.strArtist}
              </Link>
            </Typography>
            <Typography variant="h4">{artist.strCountry}</Typography>
            {/* <img src={artist.strArtistThumb} alt={artist.strArtist} /> */}
          </Box>
        ))}
      </Box>
    </>
  );
};

export default Search;
