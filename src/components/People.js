import React, { Component, useState, useEffect } from 'react';
import Homeworld from './Homeworld'


const People = (props) => {

    // const link = props.info.homeworld;
    // const [homeworld,setHomeworld] = useState('');

    // useEffect(()=>{
    //     let dalink = props.info.homeworld;
    //     async function fetchHomeworld(){
    //       let res = await fetch(dalink);
    //       let data = await res.json();
    //       setHomeworld(data.results)
    //     }
   
    //     fetchHomeworld()
    //  }, [])

 

//    const fetchHomeworld= () =>{
//             fetch(props.info.homeworld)
//             .then(response => response.json())
//             .then(allposts=> console.log(allposts))
// //             // .then(allposts =>{ dispatch({type: 'FETCH_POSTS', payload:allposts})
// //             // })

//     }

    // debugger
    return (
        <div>
            <h2>{props.info.name}</h2>
            <Homeworld key={props.info.count} link={props.info.homeworld}/>
        </div>
    );
};

export default People;

// class People extends Component {
//     render() {
//         return (
//             <div>
//                 <h2>hod</h2>
//             </div>
//         );
//     }
// }

// export default People;