import axios from "axios"
import { useEffect } from "react"
import { useState } from "react"
import { Link } from "react-router-dom"
import NavBar from "../components/Navbar"


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
    <NavBar />
        {list.map((eachBeer) => {
            return (
                <Link to={`/beers/${eachBeer._id}`} >
                <div key={eachBeer._id} className="cards">
                    <div>
                        <img src={eachBeer.image_url} atl={eachBeer}/>
                    </div>
                    <div>
                        <h1>{eachBeer.name}</h1>
                        <h3>{eachBeer.tagline}</h3>
                        <h5>{eachBeer.contributed_by}</h5>
                    </div>
                </div>
                    <hr />
                </Link>     

            )

        })}
    
    </div>
  )
}

export default Beers