import axios from "axios"
import { useEffect, useState } from "react"


function RandomBeer() {


    const [ beerRandom, setBeerRandom ] = useState([])
    const [ isFetching, setIsFetching ] = useState(false)


    useEffect(() => {
        getData()
    }, [])

    const getData = async() => {
        try {
            const response = await axios.get("https://ih-beers-api2.herokuapp.com/beers/random")
            setBeerRandom(response.data)
            setIsFetching(true)
        } catch (error) {
                console.log(error)
    
        }
    }

    if (isFetching === false) {
        return <h3>...LOADING</h3>
    }


  return (
    <div>
    {console.log("response", beerRandom)}
    <img src={beerRandom.image_url} atl={beerRandom.name}/>
        <h3>{beerRandom.name}</h3>
        <h3>{beerRandom.tagline}</h3>
        <h3>{beerRandom.first_brewed}</h3>
        <h3>{beerRandom.attenuation_level}</h3>
        <h3>{beerRandom.description}</h3>
        <h3>{beerRandom.contributed_by}</h3>

    </div>
  )
}

export default RandomBeer