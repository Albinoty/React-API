import React, {useState, useEffect, useContext} from 'react';

export default function Intro(props){

    //Declaration Varib

    const [count, setCount] = useState(0);
    const [classe,setClasse] = useState({message: "la ferme"})
    //Variante de variables
    const [age, setAge] = useState(22);
    const [fruit, setFruit] = useState('banane');
    const [todos, setTodos] = useState([{text: 'Apprendre les hooks'},{text: 'Faire les slides'}]);
    let recherche = "";
    //Hook D'effet
    // Ceci est équivalent à componentDidMount plus componentDidUpdate
    useEffect(()=> {
        //Mets a jour le titre du document
        document.title = `Vous avez cliqué ${count} fois`;
        // setTodos([...todos,{text: "niquer des meres"}])
    });

    const [films,setFilms] = useState([]);

    let lol = todos.map((list) => <li key={list.text.toString()}>{list.text}</li>)

    // useEffect(()=>{
    //     fetch('http://www.omdbapi.com/?t=wallstreet&apikey=40957879')
    //         .then(reponse => reponse.json())
    //         .then(data => setFilms(data));
    // })



    //Function

    const handleClick = (e)=>{
        setCount(count + 1);
    }

    const nombres = [1,2,3,4,5];

    const leDouble = nombres.map((nombre) => 
    <li key={nombre.toString()}>
        {nombre * 2}
    </li>);

    

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

    // console.log(films)

    return(
        <section>
            <div>
                <p>Vous avez cliqué {count} fois</p>
                <button onClick={handleClick}>
                    Cliquez ici
                </button>
                <button onClick={() => setTodos([...todos,{text: "niquer des meres"}])}>
                    Cliquez ici
                </button>
            </div>
            <div>
                <p>{age}</p>
                <p>{fruit}</p>
                <p>{lol}</p>
                <p onClick={()=> setClasse({message: "Oue c bon"})}>Objet {classe.message}</p>   <input type="text" onKeyDown={search}/>
                <h2>{films.Title}</h2>
                <h3>Languages</h3>
                <ul>
                    {films.Language}
                </ul>
                <img src={films.Poster} alt=""/>
            </div>
        </section>
    );
}