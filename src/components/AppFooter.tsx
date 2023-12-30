import { Typography } from "@mui/material";
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import AppBar from '@mui/material/AppBar';
import React from "react";
// import Toolbar from '@mui/material/Toolbar';
// import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';
// import { Link } from "react-router-dom";
// import Paths from "../paths";

const AppFooter: React.FC = () => {

    return (
        <Box sx={{ flexGrow: 1, boxShadow: 1 }} >
            <AppBar position="static">
                <Container fixed disableGutters>
                    <Typography component="div" m={1} p={1} align="center">
                        &copy;2024 ut
                    </Typography>
                </Container>
            </AppBar>
        </Box >
    );
}

export default AppFooter;