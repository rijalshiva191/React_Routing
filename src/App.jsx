import React from 'react'
import {BrowserRouter as Router,Routes,Route, Link} from "react-router-dom"
import Homepage from "./assets/Homepage"
import Aboutus from "./assets/Aboutus"
import Contactus from "./assets/Contactus"
import PagenotFound from "./assets/PagenotFound"
import "./Style.css";
import BookDetails from "./BookDetails"
const App = () => {
  return (
    <div>

    <Router>
    <nav>
    <ul>
      <li>
      <Link to ="/home">Home</Link>
      </li>
      <li><Link to ="/about">Aboutus</Link> </li>
      <li><Link to ="/contact">Contactus</Link> </li>
    </ul>
  </nav>
          <Routes>
              <Route path="contact" element={<Contactus />}/>

           <Route path="books" >
           <Route path=":id" element ={<BookDetails />}/>
              
              </Route>
              <Route path="about" element={<Aboutus />}/>
              <Route path="home" element={<Homepage />}/>
              <Route path="*"  element ={<PagenotFound/>}/>
          </Routes>
          <div>Copyright &copy; {new Date().getFullYear()}</div>
    </Router>
    </div>
  )
}

export default App
