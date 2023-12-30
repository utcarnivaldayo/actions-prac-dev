import { Typography } from "@mui/material";
import { Link } from "react-router-dom";
import Paths from "../../paths";
import { Page } from "../../components/Page";
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

// Card
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

const HomeView = () => {
    return (
        <Page>
            <Container fixed>
                <Typography variant="h1" component="h1" align="center">
                    こんにちは、世界!
                </Typography>
            </Container>
            {/* cards */}
            <Box sx={{ display: 'flex', justifyContent: 'space-evenly' }}>
                <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                        component="img"
                        alt="green iguana"
                        height="140"
                        image="/static/images/cards/contemplative-reptile.jpg"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            学習
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Lizards are a widespread group of squamate reptiles, with over 6,000
                            species, ranging across all continents except Antarctica
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button variant="contained" color="secondary" size="small" component={Link} to={Paths.learn()} fullWidth>詳細</Button>
                    </CardActions>
                </Card>
                <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                        component="img"
                        alt="green iguana"
                        height="140"
                        image="/static/images/cards/contemplative-reptile.jpg"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            設計
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Lizards are a widespread group of squamate reptiles, with over 6,000
                            species, ranging across all continents except Antarctica
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button variant="contained" color="secondary" size="small" component={Link} to={Paths.design()} fullWidth>詳細</Button>
                    </CardActions>
                </Card>
                <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                        component="img"
                        alt="green iguana"
                        height="140"
                        image="/static/images/cards/contemplative-reptile.jpg"
                    />
                    <CardContent>
                        <Typography variant="h5" component="div">
                            データベース
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Lizards are a widespread group of squamate reptiles, with over 6,000
                            species, ranging across all continents except Antarctica
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button variant="contained" color="secondary" size="small" component={Link} to={Paths.database()} fullWidth>詳細</Button>
                    </CardActions>
                </Card>
            </Box>
        </Page>
    );
}

export default HomeView;
