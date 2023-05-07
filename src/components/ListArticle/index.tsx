import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';

import Article from '@components/Article';

interface ListArticleProps {
	header: string;
	articles: any[];
}

const ListArticle = (props: ListArticleProps) => {
	const { articles, header } = props;

	return (
		<>
			<Grid item xs={12} md={12}>
				<Typography variant="h6" gutterBottom>
					{header}
				</Typography>
				<Divider />
				{articles.map((article) => (
					<Grid item key={article?.header}>
						<Article key={article?.header} article={article} />
					</Grid>
				))}
			</Grid>
		</>
	);
}

export default ListArticle;
