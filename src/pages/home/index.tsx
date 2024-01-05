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
import SchoolIcon from '@mui/icons-material/School';
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';

const HomeView: React.FC = () => {
    return (
        <Page>
            <Container fixed>
                <Typography variant="h1" component="h1" align="center" p={5} m={5}>
                    Hello, World!!!
                </Typography>
            </Container>
            {/* cards */}
            <Stack
                direction={{ sm: 'column', md: 'row' }}
                divider={<Divider orientation="vertical" flexItem />}
                justifyContent="space-evenly"
                alignItems="center"
                spacing={{ xs: 3, sm: 3 }}
            >
                <Card sx={{ maxWidth: 320 }}>
                    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: 180 }}>
                        <SchoolIcon sx={{ fontSize: 160 }} />
                    </Box>
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
                <Card sx={{ maxWidth: 320 }}>
                    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: 180 }}>
                        <DesignServicesIcon sx={{ fontSize: 160 }} />
                    </Box>
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
                <Card sx={{ maxWidth: 320 }}>
                    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: 180 }}>
                        <AnalyticsIcon sx={{ fontSize: 160 }} />
                    </Box>
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
            </Stack>
        </Page>
    );
}

export default HomeView;
