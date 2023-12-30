// import { Link } from "react-router-dom";
// import Paths from "../../paths";
import Page from "../../components/Page";
import Container from '@mui/material/Container';
import { Typography } from "@mui/material";
import Box from '@mui/material/Box';
import AnalyticsIcon from '@mui/icons-material/Analytics';

const DatabaseView: React.FC = () => {
    return (
        <Page>
            <Container fixed>
                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: 140 }}>
                    <AnalyticsIcon sx={{ fontSize: 80, p: 1, m: 1 }} />
                    <Typography variant="h2" component="h2" align="center">
                        Database
                    </Typography>
                </Box>
            </Container>
        </Page>
    );
}

export default DatabaseView;
