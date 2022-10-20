import { Toolbar } from "@mui/material";


import { IconButton } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import { AppBar } from "@mui/material";
import { Typography } from "@mui/material";
import { Button } from "@mui/material";
import * as React from "react";

export default function Header(){
    return(
        <>
        <AppBar position="static">
            <Toolbar>
                <IconButton
                    size="larger"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{mr: 2}}
                >
      
                    <MenuIcon></MenuIcon>
                    
                </IconButton>

                <Typography variant="h6"
                    Component="div" sx={{flexGrow: 1}}>
                        Header
                </Typography>
                <Button color="inherit">Login</Button>

            </Toolbar>
        </AppBar>
        </>
    );
}