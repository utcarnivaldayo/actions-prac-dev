import { Typography } from "@mui/material";
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from "react-router-dom";
import Paths from "../paths";
import React from "react";

const AppHeader: React.FC = () => {
    const toolBarItems = Object.entries({ ...Paths });
    console.log(toolBarItems);

    const capitalize = (str: string) => {
        if (typeof str !== 'string' || !str) return str;
        return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
    };

    return (
        <Box sx={{ flexGrow: 1, boxShadow: 1 }}>
            <AppBar position="static">
                <Container fixed disableGutters>
                    <Toolbar>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ m: 1 }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Box sx={{ display: 'inline-flex', justifyContent: 'flex-start' }}>
                            {toolBarItems.map(([key, path]) => {
                                return (
                                    <Typography key={key} variant="h6" component="div" m={1} p={1}>
                                        <Link to={path()} color="primary">{capitalize(key)}</Link>
                                    </Typography>
                                );
                            })}
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
        </Box >
    );
}

export default AppHeader;