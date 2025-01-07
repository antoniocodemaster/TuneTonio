import { Box } from '@mui/material';
import heroBg from '../../assets/images/hero-bg.jpg';
import CounterProvider from './contexts/CounterContext';
import Links from './Links';

const LandingPage = () => {
  return (
    <CounterProvider>
      <Box
        className="landing-page flex flex-col min-h-[100svh]"
        sx={{
          backgroundAttachment: 'fixed',
          backgroundImage: `url(${heroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <Links />
      </Box>
    </CounterProvider>
  );
};

export default LandingPage;
