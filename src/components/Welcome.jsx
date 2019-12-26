import React from 'react';


const Welcome = (props) =>{

    console.log(props)

    return <h1>{props.nom}</h1>
};

export default Welcome;