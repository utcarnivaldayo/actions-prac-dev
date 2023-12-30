// import { Link } from "react-router-dom";
// import Paths from "../../paths";
import { Page } from "../../components/Page";
import Container from '@mui/material/Container';
import { Typography } from "@mui/material";
import Box from '@mui/material/Box';
import ContactPageIcon from '@mui/icons-material/ContactPage';
import Paper from '@mui/material/Paper';
import MyIcon from '../../assets/speaker256.gif';

const ProfileView: React.FC = () => {
    return (
        <Page>
            <Paper>
                <Container fixed>
                    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: 140 }}>
                        <ContactPageIcon sx={{ fontSize: 80, p: 1, m: 1 }} />
                        <Typography variant="h2" component="h2" align="center">
                            Profile
                        </Typography>
                    </Box>
                </Container>
                <Box>
                    <img style={{ height: 200 }} src={MyIcon} />
                </Box>
            </Paper>
        </Page>
    );
}

export default ProfileView;
