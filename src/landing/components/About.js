import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Masonry from '@mui/lab/Masonry';
import { useMediaQuery } from '@mui/material';


export default function About() {
  const isSmallScreen = useMediaQuery('(max-width:600px)');
  const columns = isSmallScreen ? 1 : 3;

  return (
    <Container
      id="about"
      sx={{
        pt: { xs: 4, sm: 12 },
        pb: { xs: 8, sm: 16 },
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
        <Typography component="h2" variant="h4" color="text.primary">
          ABOUT ME
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Here you will find more information about me .
        </Typography>
      </Box>
      <Masonry columns={columns} spacing={2} style={{ justifyItems: "center", alignContent: "center" }}>
        <Card sx={{ p: 1 ,background: 'transparent',  backgroundColor: 'action.selected',}}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              pr: 2,
            }}
          >
            <CardHeader
              title={"Education"}
            />
          </Box>
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              Vindhya Institute of
              Technology & Science, Satna
            </Typography>
            <Typography variant="body2" color="text.secondary">
              B.Tech (Computer Science &
              Engineering)
            </Typography>
            <Typography variant="body2" color="text.secondary">
              July 2019 - May 2023 (8.32 CGPA)
            </Typography>
            <Typography variant="body2" color="text.primary">
              &nbsp;
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Govt. Model School, Satna
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Class XII
              June 2018 - 2019 (80.80 %)
            </Typography>
            <Typography variant="body2" color="text.secondary">
              &nbsp;
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Govt. Model School,
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Class X
              June 2016 - 2017 (81.67 %)
            </Typography>

          </CardContent>

        </Card>
        <Card sx={{ p: 1, background: 'transparent', backgroundColor: 'action.selected',}}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              pr: 2,
            }}
          >
            <CardHeader
              title={"Experience"}

            />
          </Box>
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              Metaversity Technologies, Noida — 
            </Typography>
            <Typography variant="body2" color="text.secondary">
            React Native Developer ( Nov 2022 - Dec 2023 )
            </Typography>
            <Typography variant="body2" color="text.secondary">
            &nbsp;
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Architecting high-quality applications with clean code.
              Translating designs to pixel-perfect interfaces.
              Diagnosing and resolving bugs for native-like performance.
              Actively involved in the creation of cutting-edge mobile
              applications.
              Actively involved in the creation of cutting-edge mobile
              applications.
            </Typography>
          </CardContent>

        </Card>
      </Masonry>
    </Container>
  );
}