import { PlayArrow, SkipNext, SkipPrevious } from '@mui/icons-material';
import { Card, CardContent, CardActions, IconButton, Typography, Slider, CardMedia, useMediaQuery } from '@mui/material';
import React from 'react';
import FilaMusica from './FilaMusica';

export default function TocadorMusica(){
const telaGrande=useMediaQuery('(min-width:900px)')

    return(
        <>
            <Card style={{ display:'flex', flexDirection:'column' , margin: '10px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <CardContent>
                        <Typography variant="h5" component="h2">Título da Música</Typography>
                        <Typography variant="subtitle1" component="h3">Nome do Artista</Typography>
                    </CardContent>
                    <CardActions>
                        <IconButton><SkipPrevious /></IconButton>
                        <IconButton><PlayArrow /></IconButton>
                        <IconButton><SkipNext /></IconButton>
                        <Typography>00:32:17</Typography>
                    </CardActions>
                    <CardMedia style={{ width: '140px', height: '140px'}} image="https://i.ytimg.com/vi/HLBhG4-r85U/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAFRToQgePzl3L8xGmO50dB0Q7D1g" />
                </div>
                <Slider type="range" min={0} max={1} step={0.01} style={{ marginLeft: '30px', width: '90%' }} />
            </Card>
            {
            telaGrande &&
            <FilaMusica/>
            }
            </>
    )
}