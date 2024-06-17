

export default function PokeCard({ pokemon }) {
  
  
  return (
    <div className="flex flex-wrap gap-5 items-center justify-center pt-4">
         {pokemon.map(p =>(
      <div key={p.name} className=" w-full max-w-80 gap-4">
            <h1>{p.title}</h1>
            <img src={`https://image.tmdb.org/t/p/w500/${p.backdrop_path}`} className=""/>
            <div className="w-full">
                  <span>Vote average {p.vote_average}</span>
                 <p className='truncate'>{p.overview}</p>
            </div>
         
        </div>
    ))}
    </div>
  )
}
