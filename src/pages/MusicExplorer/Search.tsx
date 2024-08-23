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
    setSearchResults([]);
    setLoading(true);
    setTimeout(async () => {
      try {
        const artists = await searchArtists(data);
        setLoading(false);
        if (artists) {
          setSearchResults(artists);
          return;
        }
        setError('Nothing found! Please try again with a different keyword.');
      } catch (error) {
        console.error('Error fetching artists:', error);
      }
    }, 2000); // Simulate a delay to show the loading spinner
  };

  return (
    <>
      <Typography variant="h2">What do you want to listen to?</Typography>
      <Box
        className="search-form"
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
          rules={{ required: 'Please enter an artist name or some keyword' }}
          render={({ field }) => (
            <TextField
              {...field}
              label="Search Artist"
              variant="standard"
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
          Search Now
        </Button>
      </Box>

      {loading && (
        <Box sx={{ display: 'flex', justifyContent: 'left' }}>
          <CircularProgress />
        </Box>
      )}

      {searchResults?.length > 0 && (
        <>
          <Typography variant="h3">Search Results!</Typography>
          <Box className="flex flex-wrap gap-4 albums-list mt-6">
            {searchResults.map((artist) => (
              <Box
                className=" md:w-[48%] lg:w-[23%]  w-[100%] mb-8 album"
                key={artist.idArtist}
              >
                <img src={artist.strArtistThumb} alt={artist.strArtist} />

                <Box className="disk-data pt-4">
                  <Typography variant="h3" className="text-left pl-2">
                    <Link to={`/music-explorer/albums/all/${artist.strArtist}`}>
                      {artist.strArtist}
                    </Link>
                  </Typography>
                  <Box className="buttons-container">
                    <Link
                      to={`/music-explorer/albums/all/${artist.strArtist}`}
                      className="btn-green"
                    >
                      Checkout Discography
                    </Link>
                  </Box>
                </Box>
              </Box>
            ))}
          </Box>
        </>
      )}

      {error && <Typography variant="h3">{error}</Typography>}
    </>
  );
};

export default Search;
