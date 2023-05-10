import { Grid } from "@mui/material";

import FeaturedArticle from "@components/FeaturedArticle";

import { ListFeaturedArticleProps } from './types';

const ListFeaturedArticle = ({ featuredArticles }: ListFeaturedArticleProps) => {
  return (
    <Grid container spacing={4}>
      {featuredArticles.map((post) => (
        <FeaturedArticle key={post?.title} post={post} />
      ))}
    </Grid>
  );
}

export default ListFeaturedArticle;