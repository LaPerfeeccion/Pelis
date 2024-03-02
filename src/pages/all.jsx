import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Stack, Typography, Grid, CircularProgress, Backdrop } from '@mui/material';
import HoverRating from '../components/stars';
import { useNavigate } from 'react-router-dom';
import "./all.css"

function App() {
    const [peliculas, setPeliculas] = useState([]);
    const [open, setOpen] = React.useState(false);
    const handleClose = () => {
        setOpen(false);
    };

    const handleOpen = () => {
        setOpen(true);
    }

    const navigate = useNavigate(); // Hook para la navegación

    useEffect(() => {
        async function obtenerPeliculas() {
            handleOpen();
            try {
                await new Promise(resolve => setTimeout(resolve, 800));
                const apiKey = 'e1037283a4f1a9be5ce03d5732cddf21';
                const response = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=es-ES`);
                setPeliculas(response.data.results);
            } catch (error) {
                console.error('Error al obtener las películas:', error);
                console.log("error:", error);
            } finally {
                handleClose(); // Cierra el círculo de progreso
            }
        }

        obtenerPeliculas();
    }, []);

    const handleMovieClick = (movie) => {
        navigate(`/informations?movie=${encodeURIComponent(JSON.stringify(movie))}`); // Navega a la página de información con la información de la película como query string
    };

    return (
        <Stack direction="column" spacing={2}>
            <Typography variant='h3'>Películas</Typography>
            <Backdrop
                sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                open={open}
            >
                <CircularProgress color="inherit" />
            </Backdrop>
            <Grid container spacing={2}>
                {peliculas.map(pelicula => (
                    <Grid sx={{alignItems:"center", justifyContent:"space-around",padding:"15px", gap:"5px", display:"flex", flexDirection:"column"}} item xs={12} sm={6} md={4} lg={4} key={pelicula.id}>
                        <div className='box' onClick={() => handleMovieClick(pelicula)} style={{ cursor: 'pointer' }}>
                            <Typography variant='h6'>{pelicula.title}</Typography>
                            <img width={"300px"} src={`https://image.tmdb.org/t/p/w500/${pelicula.poster_path}`} alt={pelicula.title} />
                            <HoverRating></HoverRating>
                        </div>
                    </Grid>
                ))}
            </Grid>
        </Stack>
    );
}

export default App;
