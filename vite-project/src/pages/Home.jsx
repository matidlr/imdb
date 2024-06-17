import { useEffect, useState } from "react"
import PokeCard from "../components/PokeCard";


export default function Home() {
  const [pokemon, setPokemon] = useState([]);

  useEffect(() =>{
   const getData = async () => {
    const fetchData = await fetch('https://api.themoviedb.org/3/discover/movie?api_key=759aea994406a38f0725773a41955645')
    .then((res) => res.json())
    .then((data) => {

        setPokemon(data.results);
        console.log(data);
    })
    .catch((err)=> {
      
    });
   }
   
     getData();
    
  }, []);
  
  return (

    <>

   <PokeCard pokemon={pokemon}/>

    </>
  )
}
