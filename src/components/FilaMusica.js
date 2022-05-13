import { Delete } from '@mui/icons-material';
import { Avatar, IconButton, Typography } from '@mui/material';
import React from 'react';

export default function FilaMusica(){
    const musicaFake = {
        titulo : 'Título da Música',
        artista: 'Artista da Música',
        imagem: 'https://i.ytimg.com/vi/HLBhG4-r85U/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAFRToQgePzl3L8xGmO50dB0Q7D1g'
    }

    function MusicaNaFila({musica}){
        const { imagem, titulo, artista } = musica;
        
        return (
            <div style={{ display: 'grid', gridAutoFlow: 'column', gridTemplateColumns: '50px auto 50px', alignItems: 'center', margin: '10px' }}>
                <Avatar src={imagem} alt="Capa do CD" style={{ width:'40px', height: '40px'}} />
                <div>
                    <Typography variant="subtitle1">{titulo}</Typography>
                    <Typography variant='body2'>{artista}</Typography>
                </div>
                <IconButton><Delete color="error"/></IconButton>
            </div>
        );
    }

    return(
        <div>
            <Typography>Próximos da Fila (5)</Typography>
            {Array.from({length: 5}, () => musicaFake ).map((musica, index) => {
                return(<MusicaNaFila key={index} musica={musica} />)
            })}
        </div>
    )
}