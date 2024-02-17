import { Article } from 'src/services/api/generated/endpoints.schemas';
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Grid,
  Typography,
} from '@mui/material';

const ArticleCard = ({ article }: { article: Article }) => {
  return (
    <Grid item sm={3}>
      <Card key={article.slug}>
        <CardContent style={{ height: '400px' }}>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            {article.title}
          </Typography>
          <Typography variant="h5" component="div">
            {article.description}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            adjective
          </Typography>
          <Typography variant="body2">
            well meaning and kindly.
            <br />
            {'"a benevolent smile"'}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default ArticleCard;
