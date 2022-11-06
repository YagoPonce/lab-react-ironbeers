import { Link } from "react-router-dom"


function Home() {
  return (
    <div>
    
    <Link to="/beers">All beers</Link>
    <br />
    <Link to="/random-beer">Random beer</Link>
    <br />

    <Link to="/new-beer">New beer</Link>

   
    
    
    
    
    
    </div>
  )
}

export default Home