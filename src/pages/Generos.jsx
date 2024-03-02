import React, { useState, useEffect } from 'react';
import PrimarySearchAppBar from '../components/appbar';
import { Stack, Typography, Button, Box, Backdrop, CircularProgress } from '@mui/material';
import axios from 'axios';
import "./Generos.css"
import { useNavigate } from 'react-router-dom';
import { useInfo } from '../contex/useinfo';
const Generos = () => {
    const [open, setOpen] = React.useState(false);
    const [generos, setGeneros] = useState([]);
    const navigate = useNavigate();
    const { updateinfo } = useInfo();
    
    const handleClose = () => {
        setOpen(false);
    };

    const handleOpen = () => {
        setOpen(true);
    }
    
    useEffect(() => {
    async function fetchGeneros() {
        try {
            const response = await axios.get('https://api.themoviedb.org/3/genre/movie/list?api_key=e1037283a4f1a9be5ce03d5732cddf21');
            setGeneros(response.data.genres);
            updateinfo(response.data);
        } catch (error) {
            console.error('Error fetching generos:', error);
        }
    }

        fetchGeneros();
    }, []);

    const handleGeneroClick = async (generoId) => {
        handleOpen(); // Abre el círculo de progreso
        try {
            await navigate(`/all/${generoId}`); // Navega a la ruta específica del género
        } catch (error) {
            console.log("error:", error);
        } finally {
            handleClose(); // Cierra el círculo de progreso
        }
    };
    

    return (
        <Stack bgcolor={'black'} className='lista'>
            <Backdrop
                sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                open={open}
            >
                <CircularProgress color="inherit" />
            </Backdrop>
            <PrimarySearchAppBar />
            <Box>
                <Typography variant="h2">Géneros</Typography>
            </Box>
            <Stack className='geners'>
                {generos.map(genero => (
                    <Button variant="contained" onClick={() => handleGeneroClick(genero.id)} key={genero.id}>
                        {genero.name}
                    </Button>
                ))}
            </Stack>
        </Stack>
    );
}

export default Generos;
