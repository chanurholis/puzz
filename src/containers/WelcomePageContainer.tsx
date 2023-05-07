import { Grid } from '@mui/material';

import DefaultLayout from '@layouts/DefaultLayout';

import FeaturedPost from '@components/FeaturedPost';
import ListArticle from '@components/ListArticle';
import MainFeaturedPost from '@components/MainFeaturedPost';

import articles from '@constants/articles.json';

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

const WelcomePage = () => {
  return (
    <>
      <DefaultLayout>
        <MainFeaturedPost post={mainFeaturedPost} />
        <Grid container spacing={4}>
          {featuredArticles.map((post) => (
            <FeaturedPost key={post?.title} post={post} />
          ))}
        </Grid>
        <Grid container spacing={5} sx={{ mt: 3 }}>
          <ListArticle header="Articles" articles={articles} />
        </Grid>
      </DefaultLayout>
    </>
  );
}

export default WelcomePage;