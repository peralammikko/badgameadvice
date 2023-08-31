import React, {useState} from "react";
import { Card, CardMedia, Container, Fab, Grid, Typography, makeStyles } from "@mui/material";
import Monke from "./images/Navy_Seal.jpg";
import "./styles.css";
import {quoteList} from "./quotes.js";
import {imageList} from "./images.js";


const getText = () => {
    return quoteList[Math.floor(Math.random()*quoteList.length)];
}

const getImage = () => {
    return imageList[Math.floor(Math.random() * imageList.length)];
}


function Board() {
    const [quoteText, setQuoteText] = useState(getText);
    const [quoteImage, setQuoteImage] = useState(getImage);

    const generateImage = () => {
        setQuoteText(getText);
        setQuoteImage(getImage);
    }

    return (
        <>
            <Container maxWidth="xl">
                <Grid 
                    container 
                    direction="column"
                    alignItems="center"
                    justifyContent="space-around"
                    sx={{mt: 1}}>
                    <Grid item>
                        <Card className="cardRoot">
                            <CardMedia
                                component="img"
                                height="500px"
                                image={quoteImage}
                            />
                            <Typography
                                variant="h3"
                                className="cardFont"
                                fontFamily="Sofia"
                                sx={{textShadow: '2px 2px 4px #000000'}}
                            >
                            {quoteText}
                            </Typography>
                        </Card>
                    </Grid>
                </Grid>
            </Container>
        <Fab variant="extended" onClick={generateImage} style={{marginTop: 20}}>New quote</Fab>
        </>
    )
}

export default Board;