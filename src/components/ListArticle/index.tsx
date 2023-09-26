import Grid from '@mui/material/Grid';

import Article from '@components/Article';

import { ListArticleProps } from './types';

const ListArticle = (props: ListArticleProps) => {
	const { articles } = props;

	return (
		<>
			<Grid container spacing={5} sx={{ mt: 1 }}>
				<Grid item xs={12} md={12}>
					{articles.map((article) => (
						<Grid item key={article?.header} sx={{ mb: 3 }}>
							<Article key={article?.header} article={article} />
						</Grid>
					))}
				</Grid>
			</Grid>
		</>
	);
}

export default ListArticle;
