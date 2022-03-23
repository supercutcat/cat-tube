import React, { FC, useContext, useRef } from "react";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import {
  Avatar,
  CardActionArea,
  CardHeader,
  IconButton,
  Skeleton,
} from "@mui/material";
import { red } from "@mui/material/colors";
import {
  Download,
  Favorite,
  MoreVert,
  PlayCircle,
  Share,
} from "@mui/icons-material";

// @ts-ignore
import Image from "mui-image";
import { Link } from "react-router-dom";

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

interface Home {
  loading?: boolean;
  colorMode: any;
  theme: any;
}

const HomePage: FC<Home> = ({ loading = false, colorMode, theme }) => {
  return (
    <main>
      <Box
        sx={
          theme.palette.mode === "dark"
            ? {
                pt: 8,
                pb: 6,
                background:
                  "url(src/assets/img/login-the-crown_2-1500x1000.jpg) no-repeat right #000",
              }
            : {
                bgcolor: "background.paper",
                pt: 8,
                pb: 6,
              }
        }
      >
        <Container maxWidth="sm">
          <Typography
            component="h1"
            variant="h2"
            align="center"
            color="text.primary"
            gutterBottom
          >
            The Chrown
          </Typography>
          <Typography
            variant="h5"
            align="center"
            color="text.secondary"
            paragraph
          >
            Adapted from historical events, the play dramatically tells the
            story of Queen Elizabeth II, as well as the political events and
            personal experiences of her reign.
          </Typography>
          <Stack
            sx={{ pt: 4 }}
            direction="row"
            spacing={2}
            justifyContent="center"
          >
            <Button variant="contained">Watch Now</Button>
            <Button variant="outlined">Add to Library</Button>
          </Stack>
        </Container>
      </Box>
      <Container sx={{ py: 8 }} maxWidth="lg">
        {/* End hero unit */}
        <Grid container spacing={4}>
          {cards.map((card) => (
            <Grid item key={card} xs={12} sm={6} md={4} lg={3} xl={3}>
              <Card
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <CardHeader
                  avatar={
                    loading ? (
                      <Skeleton
                        animation="wave"
                        variant="circular"
                        width={40}
                        height={40}
                      />
                    ) : (
                      <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                        R
                      </Avatar>
                    )
                  }
                  action={
                    loading ? null : (
                      <IconButton aria-label="settings">
                        <MoreVert />
                      </IconButton>
                    )
                  }
                  title={
                    loading ? (
                      <Skeleton
                        animation="wave"
                        height={10}
                        width="80%"
                        style={{ marginBottom: 6 }}
                      />
                    ) : (
                      "Shrimp"
                    )
                  }
                  subheader={
                    loading ? (
                      <Skeleton animation="wave" height={10} width="40%" />
                    ) : (
                      new Date().toDateString()
                    )
                  }
                />
                <CardActionArea
                  to={{ pathname: "/watch", search: `?v=${card}` }}
                  component={Link}
                >
                  <Image
                    src="https://source.unsplash.com/random"
                    height="200px"
                    width="auto"
                    fit="cover"
                    duration={300}
                    easing="cubic-bezier(0.7, 0, 0.6, 1)"
                    showLoading={
                      <Skeleton
                        variant="rectangular"
                        width="100%"
                        height="200px"
                        animation="wave"
                      />
                    }
                    errorIcon={true}
                    shift={null}
                    distanc="100px"
                    shiftDuration={900}
                    bgColor="inherit"
                  />
                </CardActionArea>
                <CardContent sx={{ flexGrow: 1 }}>
                  {loading ? (
                    <React.Fragment>
                      <Skeleton
                        animation="wave"
                        height={10}
                        style={{ marginBottom: 6 }}
                      />
                      <Skeleton animation="wave" height={10} width="80%" />
                    </React.Fragment>
                  ) : (
                    <Typography gutterBottom variant="h5" component="h2">
                      Heading
                    </Typography>
                  )}
                </CardContent>
                <CardActions>
                  <IconButton aria-label="play">
                    <PlayCircle />
                  </IconButton>
                  <IconButton aria-label="play">
                    <Download />
                  </IconButton>
                  <IconButton aria-label="add to favorites">
                    <Favorite color="error" />
                  </IconButton>
                  <IconButton aria-label="share">
                    <Share />
                  </IconButton>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </main>
  );
};

export default HomePage;
