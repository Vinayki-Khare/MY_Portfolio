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
import Casino from '@mui/icons-material/Casino';
import Wallet from '@mui/icons-material/Wallet';
import ViewModule from '@mui/icons-material/ViewModule';
import RestaurantMenu from '@mui/icons-material/RestaurantMenu';

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
  {
    icon: <ViewModule />,
    title: 'Sui Stakes',
    description:
      'Suistakes, a decentralized gaming platform powered by SUI blockchain technology.' +
      '       Committed to fostering community engagement and driving innovation, ' +
      '      Suistakes offers a transformative gaming experience unlike any other. ' +
      '      By empowering users and game developers alike, we are' +
      '     reshaping the gaming landscape on a global scale.'
  },
  {
    icon: <Wallet />,
    title: 'Laxce (ICO & DEX)',
    description:
    'LAXCE is a web3 application that facilitates decentralized exchanges.'+
      ' It allows users to trade cryptocurrencies and other digital assets '+
      'in a peer-to-peer and trustless manner. LAXCE leverages blockchain technology '+
      'to provide secure, transparent, and censorship-resistant trading.'+
      'LAxce consist NFT , DEX, ICO & IDO Modle',
'NFT are assets like a piece of art, digital content, or video that have been tokenized via a blockchain.'+
'DEX is a peer-to-peer marketplace where transactions occur directly between crypto traders.'+
'ICO is a fundraising mechanism in the cryptocurrency industry, Companies aiming to gather resources for the creation of a new coin, application, or service can launch an ICO.'+
'IDO is a new fundraising model that allows cryptocurrency projects to launch their native token or coin through a decentralized liquidity exchange.',

      // 'LAXCE Blockchain Ecosystem,  addresses traditional Blockchain ' +
      // '      with an eco-conscious Proof-of-Authority consensus model, focusing ' +
      // '      on accessibility and scalability while minimizing energy usage. ' +
      // '      Prioritizing user financial freedom and security, it progresses ' +
      // '      challenges through stages from establishing an online presence to offering ' +
      // '      a comprehensive DeFi ecosystem. LAXCE aims to revolutionize decentralized ' +
      // '   finance through technology and inclusivity.',
  },
  {
    icon: <Casino />,
    title: 'Meta Casino',
    description:
      'Meta Casino aims to revolutionize the online gaming landscape by leveraging the ' +
      '      unique capabilities of blockchain technology. Integrating HTML5 casino games' +
      '      seamlessly with the Sui Blockchain, we prioritizes transparency, security,' +
      '      it progresses from establishing an online gaming presence to potentially offering a' +
      '       and decentralization, comprehensive decentralized finance (DeFi) ecosystem.'
  },
  // {
  //   icon: <RestaurantMenu />,
  //   title: 'Snip Kitchen',
  //   description:
  //     'Apna Kisan, the revolutionary agri-centric e-commerce app, is committed to' +
  //     '      empowering farmers. Blurring the lines between B2B and B2C, Apna Kisan' +
  //     '      provides a holistic platform for farmers to seamlessly purchase and rate' +
  //     '      agricultural essentials. Prioritizing user-friendly interfaces, the app' +
  //     '      promises a hassle-free shopping experience for both experienced farmers' +
  //     '      and those just starting out. Discover Apna Kisan, offering carefully curated' +
  //     '   products that cater to the diverse requirements of the farming community.',
  // },
];

export default function Projects() {
  return (
    <Box
      id="projects"
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
                  backgroundColor: 'action.selected',
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
