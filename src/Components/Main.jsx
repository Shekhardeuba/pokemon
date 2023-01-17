import React,{useState} from 'react'
import Cards from './Cards'
import Pokeinfo from './Pokeinfo'
import axios from 'axios'
const Main = () => {
    const [pokeData, setPokeData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon");
  return (
    <>
        <div className="container">
            <div className="left-content">
                <Cards />
                <Cards />
                <Cards />
                <Cards />
                <Cards />
                <Cards />
                <Cards />
                <Cards />
                <Cards />
                <Cards />
                <Cards />
                <Cards />
                <Cards />
                <Cards />
                <Cards />
                <Cards />
                <Cards />
                <Cards />
                <Cards />
                <Cards />
                <Cards />
                <div className="btn-group">
                    <button>Previous</button> 
                    <button>Next</button> 
                </div>    
            </div>
            <div className="right-content">
                <Pokeinfo />
            </div>
        </div>
    </>
  )
}

export default Main
