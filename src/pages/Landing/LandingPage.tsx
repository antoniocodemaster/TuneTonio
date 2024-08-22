import { Box, Typography, Button } from '@mui/material';
import heroBg from '../../assets/images/hero-bg.jpg';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <Box
      className="landing-page flex flex-col min-h-[100svh]"
      sx={{
        backgroundAttachment: 'fixed',
        backgroundImage: `url(${heroBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <Box className="text-center my-auto">
        <Typography variant="h1" className="text-center text-white">
          Explore, Discover, and Enjoy!
        </Typography>
        <Link to="/music-explorer" className='btn-primary'>Take me to Music Explorer</Link>
      </Box>
    </Box>
  );
};

export default LandingPage;
