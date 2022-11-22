import { useEffect, useState } from "react"
import axios from 'axios'

function ListaNomes (){
    const[nomes, setNomes] = useState([]);

    useEffect(() =>{
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(res =>{
            setNomes(res.data);
        })
    })

    return(
        <div>
            {
                nomes.map(function(data){
                    return(
                        <div>
                            <h2>{data.name}</h2>
                        </div>
                    )
                })
            }
        </div>
    );
}

export default ListaNomes