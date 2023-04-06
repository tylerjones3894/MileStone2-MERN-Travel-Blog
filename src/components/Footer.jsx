import { Box, Typography, IconButton } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';

const Footer = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: 230,
        backgroundColor: '#00464A',
        color: '#fff',
        mt: 5
      }}
    >
      <Typography variant="h6" gutterBottom>
        Travel Blog
      </Typography>
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <IconButton color="inherit">
          <InstagramIcon />
        </IconButton>
        <IconButton color="inherit">
          <FacebookIcon />
        </IconButton>
        <IconButton color="inherit">
          <TwitterIcon />
        </IconButton>
      </Box>
      <Typography variant="body2" mt={3}>
        © {new Date().getFullYear()} Travel Blog. All rights reserved.
      </Typography>
    </Box>
  );
};

export default Footer;
