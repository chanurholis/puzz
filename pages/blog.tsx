import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';

import Header from '@components/Header';
import MainFeaturedPost from '@components/MainFeaturedArticle';
import FeaturedPost from '@components/FeaturedArticle';
import Footer from '@components/Footer';

import sections from '@constants/sections.json';

const mainFeaturedPost = {
  title: 'Title of a longer featured blog post',
  description:
    "Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this post's contents.",
  image: 'https://source.unsplash.com/random/?blog/',
  imageText: 'main image description',
  linkText: 'Continue reading…',
};

const featuredArticles = [
  {
    title: 'Featured post',
    date: 'Nov 12',
    description:
      'This is a wider card with supporting text below as a natural lead-in to additional content.',
    image: 'https://source.unsplash.com/random/?blog/',
    imageLabel: 'Image Text',
  },
  {
    title: 'Post title',
    date: 'Nov 11',
    description:
      'This is a wider card with supporting text below as a natural lead-in to additional content.',
    image: 'https://source.unsplash.com/random/?blog/',
    imageLabel: 'Image Text',
  },
];

const Blog = () => {
  return (
    <>
      <Container maxWidth="lg">
        <Header title="Puzz News" sections={sections} />
        <main>
          <MainFeaturedPost post={mainFeaturedPost} />
          <Grid container spacing={4}>
            {featuredArticles.map((post) => (
              <FeaturedPost key={post?.title} post={post} />
            ))}
          </Grid>
        </main>
      </Container>
      <Footer
        title="Footer"
        description="Something here to give the footer a purpose!"
      />
    </>
  );
}

export default Blog;
