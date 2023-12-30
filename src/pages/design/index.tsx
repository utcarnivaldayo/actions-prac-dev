// import { Link } from "react-router-dom";
// import Paths from "../../paths";
import { Page } from "../../components/Page";
import Container from '@mui/material/Container';
import { Typography } from "@mui/material";
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import Box from '@mui/material/Box';

const DesignView: React.FC = () => {
    return (
        <Page>
            <Container fixed>
                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: 140 }}>
                    <DesignServicesIcon sx={{ fontSize: 80, p: 1, m: 1 }} />
                    <Typography variant="h2" component="h2" align="center">
                        Design
                    </Typography>
                </Box>
            </Container>
        </Page>
    );
}

export default DesignView;
