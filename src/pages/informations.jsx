import React from 'react';
import { useLocation } from 'react-router-dom';
import { Stack, Typography, Button } from '@mui/material';
import DenseAppBar from '../components/appsbar';
import { useNavigate } from 'react-router-dom';
import "./informations.css"

function Informations() {
  const location = useLocation();
  
  const movie = JSON.parse(decodeURIComponent(new URLSearchParams(location.search).get('movie')));
  const [open, setOpen] = React.useState(false);
  const handleClose = () => {
      setOpen(false);
  };

  const handleOpen = () => {
      setOpen(true);
  }

  const navigate = useNavigate(); // Hook para la navegación
  
  const handleMovieClick = (video) => {
        navigate(`/Pelis?video=${encodeURIComponent(JSON.stringify(video))}`); // Navega a la página de información con la información de la película como query string
  };
  console.log(movie)
  return (
    <Stack className='fondo' bgcolor={"black"}  flexDirection={"column"}>
      <DenseAppBar></DenseAppBar>
      <Typography  variant='h3'>
        {movie.title}
      </Typography>
      <Stack className='todo' flexDirection={"row"} alignItems={"center"}>
        <img width={"300px"} src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}  />
      <Typography className="text" variant='h6'>
        {movie.overview}
      </Typography>
      </Stack>
      <Button variant="link" onClick={() => handleMovieClick(movie) }> Video </Button>
    </Stack>
  )
}

export default Informations;
