import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import GitHubIcon from "@mui/icons-material/GitHub";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import SwipeableTextMobileStepper from "../../Components/Header/Stepper";
import ListCard from "../../Components/Card/ListCard";
// import FeaturedPost from "./FeaturedPost";
// import Main from "./Main";
// import Sidebar from "./Sidebar";
// import post1 from "./blog-post.1.md";
// import post2 from "./blog-post.2.md";
// import post3 from "./blog-post.3.md";

const sections = [
  { title: "NEW", url: "#" },
  { title: "Limited", url: "#" },
  { title: "Woman", url: "#" },
  { title: "Man", url: "#" },
  { title: "Kid", url: "#" },
  { title: "Your design", url: "#" },
  { title: "Story", url: "#" },
  { title: "Contact", url: "#" },
  { title: "Style", url: "#" },
];

const featuredPosts = [
  {
    title: "Featured post",
    date: "Nov 12",
    description:
      "This is a wider card with supporting text below as a natural lead-in to additional content.",
    image: "https://source.unsplash.com/random",
    imageLabel: "Image Text",
  },
  {
    title: "Post title",
    date: "Nov 11",
    description:
      "This is a wider card with supporting text below as a natural lead-in to additional content.",
    image: "https://source.unsplash.com/random",
    imageLabel: "Image Text",
  },
];
const images = [
  {
    label: "保護された状態を保ち、スタイリッシュに見える",
    des: "モダンなデザインの3層ハンドメイドマスク",

    imgPath:
      "https://images.unsplash.com/photo-1586867763684-05933c155795?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
  },
  {
    label: "保護された状態を保ち、スタイリッシュに見える",
    des: "モダンなデザインの3層ハンドメイドマスク",

    imgPath:
      "https://images.unsplash.com/photo-1606501126768-b78d4569d3f9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
  },
  {
    label: "保護された状態を保ち、スタイリッシュに見える",
    des: "モダンなデザインの3層ハンドメイドマスク",

    imgPath:
      "https://images.unsplash.com/photo-1592199121537-7217efde1c73?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=876&q=80",
  },
  {
    label: "保護された状態を保ち、スタイリッシュに見える",
    des: "モダンなデザインの3層ハンドメイドマスク",

    imgPath:
      "https://images.unsplash.com/photo-1603042521335-2bc9c8d9ee3b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
  },
];
// const posts = [post1, post2, post3];

const sidebar = {
  title: "About",
  description:
    "Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.",
  archives: [
    { title: "March 2020", url: "#" },
    { title: "February 2020", url: "#" },
    { title: "January 2020", url: "#" },
    { title: "November 1999", url: "#" },
    { title: "October 1999", url: "#" },
    { title: "September 1999", url: "#" },
    { title: "August 1999", url: "#" },
    { title: "July 1999", url: "#" },
    { title: "June 1999", url: "#" },
    { title: "May 1999", url: "#" },
    { title: "April 1999", url: "#" },
  ],
  social: [
    { name: "GitHub", icon: GitHubIcon },
    { name: "Twitter", icon: TwitterIcon },
    { name: "Facebook", icon: FacebookIcon },
  ],
};

const theme = createTheme();

export default function LandingPage() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header title="Blog" sections={sections} />
        <main>
          <SwipeableTextMobileStepper images={images} />
          <ListCard />
          {/* <Grid container spacing={4}>
            {featuredPosts.map((post) => (
              <FeaturedPost key={post.title} post={post} />
            ))}
          </Grid>
          <Grid container spacing={5} sx={{ mt: 3 }}>
            <Main title="From the firehose" posts={posts} />
            <Sidebar
              title={sidebar.title}
              description={sidebar.description}
              archives={sidebar.archives}
              social={sidebar.social}
            />
          </Grid> */}
        </main>
      </Container>
      <Footer
        title="Footer"
        description="Something here to give the footer a purpose!"
      />
    </ThemeProvider>
  );
}
