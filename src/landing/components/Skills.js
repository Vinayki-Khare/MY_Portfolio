import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
const items = [
  {
    title: 'Framework & Library',
    description:
      'React Native, ReactJs, jQuery, Bootstrap & Tailwind '
  },
  {
    title: 'Languages',
    description:
      ' JavaScript (Including Data Structures and Algorithms), Solidity,  HTML, CSS  and Python '
  },
  {
    title: 'Database',
    description:
      ' MySQL & MongoDB '
  },
  {
    title: 'Tools',
    description:
      'GitHub, VSCode & Remix'
  },
  {
    title: 'Soft Skill',
    description:
      ' Presentation, Decision-Making & Leadership '
  },
  // {
  //   title: 'React Native',
  //   description:
  //     'React Native is a JavaScript library that lets you create native apps for Android, iOS, and more using React primitives and native code. '
  // },
  // {
  //   title: 'React JS',
  //   description:
  //     'React JS is a free and open-source front-end JavaScript library for building user interfaces based on components. ',
  // },
  // {
  //   title: 'DSA',
  //   description:
  //     'A data structure is a particular way data is arranged so it can be saved in memory and retrieved for later use. &  an Algorithm is a set of steps for solving a known problem'
  // },
  // {
  //   title: 'JavaScript',
  //   description:
  //     'JavaScript is a scripting or programming language that allows you to implement complex features on web pages'
  // },
  // {
  //   title: 'HTML',
  //   description:
  //     'HTML stands for Hyper Text Markup Language. it is the standard markup language for creating Web pages.it describes the structure of a Web page'
  // },
  // {
  //   title: 'CSS',
  //   description:
  //     'CSS stands for Cascading Style Sheets. CSS allows you to create great-looking web pages'
  // },
  // {
  //   title: 'Bootstrap',
  //   description:
  //     'Bootstrap is the most popular CSS Framework for developing responsive and mobile-first websites.'
  // },
  // {
  //   title: 'Tailwind',
  //   description:
  //     'Tailwind CSS is a framework that lets you build any design, directly in your HTML, with classes .'
  // },
  // {
  //   title: 'Python',
  //   description:
  //     'Python is a language that can be used for web development, software development, mathematics, system scripting and more. '
  // },
  // {
  //   title: 'MySQL',
  //   description:
  //     'MySQL is an open-source relational database management system (RDBMS)'
  // },
  //  {
  //   title: 'Soft Skill',
  //   description:
  //     'I possess soft skills such as decision-making, presentation, and leadership.'
  // },

];
export default function Skills() {


  return (
    <>
      <Container id="skills" sx={{ py: { xs: 8, sm: 16 } }}>

        <Grid item xs={12} md={6} textAlign={"center"}>
          <div>
            <Typography component="h2" variant="h4" color="text.primary">
              SKILLS
            </Typography>
            <Typography
              variant="body1"
              color="text.secondary"
              sx={{ mb: { xs: 2, sm: 4 } }}
            >
              As a web and mobile developer, I create the front end of mobile and web applications. My Toolkit Includes.
            </Typography>
          </div>
          <Grid container spacing={2.5} style={{ justifyContent: "center" }}>
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
        </Grid>

      </Container>
    </>

  );
}
