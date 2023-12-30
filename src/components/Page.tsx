import { ReactNode } from "react";
import AppHeader from "./AppHeader";
import { Box } from "@mui/material";

export type PageProps = {
    children?: ReactNode;
};

export function Page(props: PageProps) {
    const { children } = props;
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppHeader />
            <Box sx={{ m: 5 }}>{children}</Box>
            {/*{children}*/}
        </Box>
    );
}
