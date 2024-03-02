import axios from 'axios'
import React, { useState } from 'react'
import { useEffect } from 'react'


const Pelis = () => {
    const [ver, SetVer] = useState([])
    async function Peli() {
      try{
        const apikey = e1037283a4f1a9be5ce03d5732cddf21
        const traka = await axios.get(`https://api.themoviedb.org/3/movie/{movie_id}/videos?api_key=your_api_key=${apikey}`);
        SetVer(traka.data.movie);
    } catch (error) {
        console.error("Fan de dalas", error);
    }
  }

  useEffect(() => {
    traka();
  },[])

    return (
    <div>
      <video src={`https://api.themoviedb.org/3/movie/${movie_id}/videos?api_key=your_api_key=e1037283a4f1a9be5ce03d5732cddf21`}> </video>
    </div>
  )
}

export default Pelis
