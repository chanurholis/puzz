import DefaultLayout from '@layouts/DefaultLayout';

import ListArticle from '@components/ListArticle';
import MainFeaturedArticle from '@components/MainFeaturedArticle';
import ListFeaturedArticle from '@components/ListFeaturedArticle';

import { articles, featuredArticles, mainFeaturedArticleData } from '@constants/dummy-data';

const WelcomePage = () => {
  return (
    <>
      <DefaultLayout>
        <MainFeaturedArticle article={mainFeaturedArticleData} />
        <ListFeaturedArticle featuredArticles={featuredArticles} />
        {/* <ListArticle articles={articles} /> */}
      </DefaultLayout>
    </>
  );
}

export default WelcomePage;