// import { Link } from "react-router-dom";
// import Paths from "../../paths";
import { Page } from "../../components/Page";
import Container from '@mui/material/Container';
import { Typography } from "@mui/material";

const DesignView = () => {
    return (
        <Page>
            <Container fixed>
                <Typography variant="h2" component="h2" align="center">
                    設計
                </Typography>
            </Container>
        </Page>
    );
}

export default DesignView;
