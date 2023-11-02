import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import Categories from './Categories'
import Contact from './Contact'

export default function Main (){
    return (
        
        <div className="main">
              <Routes>
                <Route exact path ="/" element ={<Home/>} />
                <Route exact path ="/Categories" element ={<Categories/>} />
                <Route exact path ="/Contact" element ={<Contact/>} />
            </Routes> 
        </div>
)
}