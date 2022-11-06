import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

function BeerDetails() {
    const { id } = useParams()
    const [ beerDetails, setBeerDetails ] = useState([])
    const [ isFetching, setIsFetching ] = useState(false)


    useEffect(() => {
        getData()
    }, [])

    const getData = async () => {
        try {
            const response = await axios.get(`https://ih-beers-api2.herokuapp.com/beers`)
            setBeerDetails(response.data)
            
            setIsFetching(true)
        } catch (error) {
            console.log(error)
        }
    }
    
    if (isFetching === false) {
        return <h3>...loading</h3>
    }
    const oneBeerDetails = beerDetails.filter(eachBeer => eachBeer._id === id)
    console.log("oneBeerDetails", oneBeerDetails)

return (
    
    
    <div> 
        <img src={oneBeerDetails[0].image_url} atl={oneBeerDetails.name}/>
        <h3>{oneBeerDetails[0].name}</h3>
        <h3>{oneBeerDetails[0].tagline}</h3>
        <h3>{oneBeerDetails[0].first_brewed}</h3>
        <h3>{oneBeerDetails[0].attenuation_level}</h3>
        <h3>{oneBeerDetails[0].description}</h3>
        <h3>{oneBeerDetails[0].contributed_by}</h3>
    </div>
            )   

 

}


export default BeerDetails

