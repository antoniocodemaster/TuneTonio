import { Box, Button, TextField, Typography } from '@mui/material';
import { useForm, Controller } from 'react-hook-form';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import FormSearchData from '../../core/entities/FormSearchData';
import { searchArtists } from '../../core/services/api/theaudiodbApi';
import CircularProgress from '@mui/material/CircularProgress';
import Artist from '../../core/entities/Artist';

const Search = () => {
  const [searchResults, setSearchResults] = useState<Artist[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FormSearchData>();

  const onSubmit = async (data: FormSearchData) => {
    setError(null);
    setLoading(true);
    setTimeout(async () => {
      try {
        const artists = await searchArtists(data);
        setLoading(false);
        if (artists) {
          setSearchResults(artists);
          return;
        }
        setError('No artists found with that name or keyword! Try again.');
      } catch (error) {
        console.error('Error fetching artists:', error);
      }
    }, 2000); // Simulate a delay to show the loading spinner
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

      {loading && (
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 5 }}>
          <CircularProgress />
        </Box>
      )}

      {searchResults?.length > 0 && (
        <>
          <Typography variant="h3">Search Results!</Typography>
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
      )}

      {error && <Typography variant="h4">{error}</Typography>}
    </>
  );
};

export default Search;
