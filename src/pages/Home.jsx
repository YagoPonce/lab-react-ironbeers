import { Link } from "react-router-dom"


function Home() {
  return (
    <div>
      <h3><img src="../assets/beers.png" alt="beers"/></h3>
    <Link to="/beers">All beers</Link>
    <br />
    <h3><img src="../assets/new-beer.png" alt="beers"/></h3>

    <Link to="/random-beer">Random beer</Link>
    <br />
    <h3><img src="../assets/random-beer.png" alt="beers"/></h3>

    <Link to="/new-beer">New beer</Link>

   
    
    
    
    
    
    </div>
  )
}

export default Home