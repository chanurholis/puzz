import { Grid } from '@mui/material';

import DefaultLayout from '@layouts/DefaultLayout';

import ListArticle from '@components/ListArticle';
import MainFeaturedArticle from '@components/MainFeaturedArticle';
import ListFeaturedArticle from '@components/ListFeaturedArticle';

import articles from '@constants/articles.json';
import { featuredArticles, mainFeaturedArticle } from './dummy';

const WelcomePage = () => {
  return (
    <>
      <DefaultLayout>
        <MainFeaturedArticle post={mainFeaturedArticle} />
        <ListFeaturedArticle featuredArticles={featuredArticles} />
        <Grid container spacing={5} sx={{ mt: 3 }}>
          <ListArticle header="Articles" articles={articles} />
        </Grid>
      </DefaultLayout>
    </>
  );
}

export default WelcomePage;