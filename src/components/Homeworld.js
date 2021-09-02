import React, { useState, useEffect } from 'react';


const Homeworld = (props) => {

    const [homeworld,setHomeworld] = useState([])


  useEffect(()=>{
     async function fetchHomeworld(){
       let res = await fetch(props.link);
       let data = await res.json(); 
       setHomeworld(data.name)
     }
     fetchHomeworld()
  }, [])


    return (
        <div>
            <p>{homeworld}</p>
        </div>
    );
};

export default Homeworld;