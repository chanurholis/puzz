import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';

import Article from '@components/Article';

interface MainProps {
	articles: any[];
	title: string;
}

const Main = (props: MainProps) => {
	const { articles, title } = props;

	return (
		<Grid item xs={12} md={8} sx={{ py: 3 }}>
			<Typography variant="h6" gutterBottom>
				{title}
			</Typography>

			<Divider />
			
			{articles.map((article) => (
				<Article key={article?.title} article={article} />
			))}
		</Grid>
	);
}

export default Main;
