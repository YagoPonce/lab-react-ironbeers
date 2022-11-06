import axios from "axios"
import { useEffect } from "react"
import { useState } from "react"
import { Link } from "react-router-dom"


function Beers() {

    const [ list, setList ] = useState([])
    const [ isFetching, setIsFetching ] = useState(false)

    useEffect(() => {
        getData()
    }, [])

    const getData = async() => {
        try {
            const response = await axios.get("https://ih-beers-api2.herokuapp.com/beers")
            setList(response.data)
            setIsFetching(true)
        } catch (error) {
                console.log(error)
    
        }
    }

    if (setIsFetching === false) {
        return <h3>...LOADING</h3>
    }

  return (

    <div>
        {list.map((eachBeer) => {
            return (
                <div key={eachBeer._id}>
                <Link to={`/beers/${eachBeer._id}`} >
                    <img src={eachBeer.image_url} atl={eachBeer}/>
                    <h3>{eachBeer.name}</h3>
                    <h3>{eachBeer.tagline}</h3>
                    <h3>{eachBeer.contributed_by}</h3>
                </Link>     

                </div>
            )

        })}
    
    </div>
  )
}

export default Beers