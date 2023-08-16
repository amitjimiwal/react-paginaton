import React from "react"
import { Link } from "react-router-dom"

const Home :React.FC = () => {
  return (
    <div>
     <h1>Home Page</h1>
      <button className="p-4"><Link to="/users">Go to Users</Link></button>
    </div>
  )
}


export default Home
