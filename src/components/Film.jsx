import React, { useState } from 'react';

const Film = ()=>{

    let recherche = "";

    const [films,setFilms] = useState([]);


    // useEffect(()=>{
    //     fetch('http://www.omdbapi.com/?t=wallstreet&apikey=40957879')
    //         .then(reponse => reponse.json())
    //         .then(data => setFilms(data));
    // })


    const search = (event)=>{

        if(event.key === "Enter"){            
            fetch('http://www.omdbapi.com/?t='+recherche+'&apikey=40957879')
                .then(reponse => reponse.json())
                .then(data => setFilms(data))
            event.target.value = "";
            console.log(films)
        }
        else    
            recherche += event.key;

    }


    return (
        <div className="container text-center bg-primary text-white">
            <h1>Stream Info</h1>
            <h3 className="my-5">Quel film cherches-tu ?</h3>
            <input type="text" onKeyDown={search} className="form-control"/>
            <h3>{films.Title}</h3>
            {/* Annee */}
            {films.Year &&
                <p><b>Année de sortie:</b> {films.Year}</p>
            }
            {/* Langue */}
            {films.Language && 
                <p><b>Langues:</b> {films.Language}</p>
            }
            {/* Genre */}
            {films.Genre &&
                <p><b>Genres:</b> {films.Genre}</p>
            }
            <img src={films.Poster} alt=""/>
        </div>
    );

}


export default Film