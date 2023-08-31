import { AppBar, Box, Button, Container, Dialog, DialogActions, DialogContent, DialogTitle, Toolbar, Typography } from "@mui/material";
import React from "react";

const navItems = ["what", "who", "why"];

function Header() {
    const [open, setOpen] = React.useState(false);

    const handleOpenDialog = () => {
        setOpen(true);
    }

    const handleCloseDialog = () => {
        setOpen(false);
    }

    return (

        <Box sx={{display: "flex"}}>
            <AppBar style={{backgroundColor: "wheat"}}>
                <Container maxWidth="xl">
                    <Toolbar sx={{display: "flex", justifyContent: "space-between"}}>
                        <Typography 
                        variant="h6"
                        noWrap
                        component="a"
                        href="/"
                        sx={{
                            display: "flex",
                            fontFamily: "monospace",
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            textDecoration: "none",
                            color: "white",
                            textShadow: "1px 1px 5px #000000"
                            }}
                        >
                            Live, Love, Ludo
                        </Typography>
                        <Button
                            variant="outlined"
                            onClick={handleOpenDialog}
                            sx={{
                                fontWeight: 700,
                                borderRadius: 50,
                                borderWidth: 3,
                                borderColor: "white",
                                color: "white",
                                textShadow: "1px 1px 5px #000000"
                            }}>
                            ?
                        </Button>
                    </Toolbar>
                </Container>
            </AppBar>
        <Dialog
            open={open}
            onClose={handleCloseDialog}
        >
            <DialogTitle>What the hell is this</DialogTitle>
            <DialogContent>Dumb game quotes turned into dumb inspirational posts.
                Quotes from https://twitter.com/VGAdvisor <br/>
                Images from https://www.pexels.com/search/background/</DialogContent>
            <DialogActions>
                <Button onClick={handleCloseDialog} autoFocus>OK...</Button>
            </DialogActions>
        </Dialog>
        </Box>
    )
}

export default Header;