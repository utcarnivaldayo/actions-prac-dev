import React, { ReactNode } from "react";
import AppHeader from "./AppHeader";
import { Box } from "@mui/material";
import AppFooter from "./AppFooter";
import Toolbar from '@mui/material/Toolbar';

export type PageProps = {
    children?: ReactNode;
};

export const Page: React.FC<PageProps> = (props: PageProps) => {
    const { children } = props;
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppHeader />
            <Toolbar />
            {children}
            <Toolbar />
            <AppFooter />
        </Box>
    );
};

export default Page;