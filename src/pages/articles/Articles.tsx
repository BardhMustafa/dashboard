import { useInfiniteQuery } from '@tanstack/react-query';
import React, { useCallback } from 'react';
import BackDropLoader from 'src/components/common/BackDropLoader';
import {
  getArticles,
  GetArticlesParams,
} from 'src/services/api/generated/endpoints';
import MainContainer from 'src/shared/MainContainer';
import { ArticlesContainer } from './Articles.styles';
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Grid,
  Typography,
} from '@mui/material';
import ArticleCard from 'src/components/card/ArticleCard';
import { Article } from 'src/services/api/generated/endpoints.schemas';
// ... (previous imports)
const Articles = () => {
  const fetchArticles = async ({ pageParam = 1 }: { pageParam?: number }) => {
    const params: GetArticlesParams = {
      limit: 10, // Adjust the limit as per your requirement
      offset: (pageParam - 1) * 10,
    };
    const res = await getArticles(params);
    return res.data;
  };

  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isError,
    isFetchingNextPage,
  } = useInfiniteQuery(['articles'], fetchArticles, {
    getNextPageParam: (lastPage) => {
      const nextPage =
        lastPage.articles.length > 0 ? lastPage.articles.length / 10 + 1 : null;
      return nextPage;
    },
  });
  console.log('🚀 ~ Articles ~ isLoading:', isFetching);

  const handleLoadMore = useCallback(() => {
    fetchNextPage();
  }, [fetchNextPage]);

  return (
    <MainContainer>
      {isFetching ? (
        <BackDropLoader open={isFetching} />
      ) : (
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 1, sm: 8, md: 12 }}
        >
          {data?.pages
            .flatMap((page) => page.articles)
            .map((article: Article) => (
              <ArticleCard key={article.createdAt} article={article} />
            ))}
        </Grid>
      )}
      {hasNextPage && (
        <Button onClick={handleLoadMore} disabled={isFetching}>
          {isFetchingNextPage ? 'Loading...' : 'Load More'}
        </Button>
      )}
    </MainContainer>
  );
};
export default Articles;
