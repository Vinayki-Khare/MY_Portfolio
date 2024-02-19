import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import AccountBalanceWallet from '@mui/icons-material/AccountBalanceWallet';
import LeaderboardTwoTone from '@mui/icons-material/LeaderboardTwoTone';
import Agriculture from '@mui/icons-material/Agriculture';

const items = [
  {
    icon: <AccountBalanceWallet />,
    title: 'Crypto Wallet',
    description:
      'CryptoWallet, a versatile crypto currency management solution, enables' +
      '      seamless sending and receiving of multiple currencies. With support for' +
      '      managing more than one wallet and conducting transactions in various' +
      '      currencies, it offers users flexibility and control over their digital assets.' +
      '      Simplifying cryptocurrency management, CryptoWallet is designed for a' +
      'user-friendly and efficient experience.',
  },
  {
    icon: <LeaderboardTwoTone />,
    title: 'World247',
    description:
      'World247, the ultimate crypto exchange app, seamlessly marries simplicity' +
      '      and security. its groundbreaking P2P module redefines the trading' +
      '      experience. Execute trades effortlessly, enjoy multi-currency support, and' +
      '      experience a user-friendly interface. World247 caters to both seasoned' +
      '      traders and beginners, promising streamlined efficiency in the crypto world.,'
  },
  {
    icon: <Agriculture />,
    title: 'Apna Kisan',
    description:
      'Apna Kisan, the revolutionary agri-centric e-commerce app, is committed to' +
      '      empowering farmers. Blurring the lines between B2B and B2C, Apna Kisan' +
      '      provides a holistic platform for farmers to seamlessly purchase and rate' +
      '      agricultural essentials. Prioritizing user-friendly interfaces, the app' +
      '      promises a hassle-free shopping experience for both experienced farmers' +
      '      and those just starting out. Discover Apna Kisan, offering carefully curated' +
      '   products that cater to the diverse requirements of the farming community.',
  },
];

export default function Highlights() {
  return (
    <Box
      id="highlights"
      sx={{
        pt: { xs: 4, sm: 12 },
        pb: { xs: 8, sm: 16 },
        color: 'white',
        bgcolor: '#06090a',
      }}
    >
      <Container
        sx={{
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: { xs: 3, sm: 6 },
        }}
      >
        <Box
          sx={{
            width: { sm: '100%', md: '60%' },
            textAlign: { sm: 'left', md: 'center' },
          }}
        >
          <Typography component="h2" variant="h4">
            PROJECTS
          </Typography>
          <Typography variant="body1" sx={{ color: 'grey.400' }}>
            Here you will find some of my projects that I created. with each project containing its own case study
          </Typography>
        </Box>
        <Grid container spacing={2.5}>
          {items.map((item, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Stack
                direction="column"
                color="inherit"
                component={Card}
                spacing={1}
                useFlexGap
                sx={{
                  p: 3,
                  height: '100%',
                  border: '1px solid',
                  borderColor: 'grey.800',
                  background: 'transparent',
                  backgroundColor: 'grey.900',
                }}
              >
                <Box sx={{ opacity: '50%' }}>{item.icon}</Box>
                <div>
                  <Typography fontWeight="medium" gutterBottom>
                    {item.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'grey.400' }}>
                    {item.description}
                  </Typography>
                </div>
              </Stack>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}