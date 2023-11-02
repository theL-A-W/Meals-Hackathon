import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import Categories from './Categories'
import Contact from './Contact'
import SearchDetails from './SearchDetails'


export default function Main (props){
    return (
        
        <div className="main">
              <Routes>
                <Route path ="/" element ={<Home/>} />
                <Route  path ="/Categories" element ={<Categories/>} />
                <Route  path ="/Contact" element ={<Contact/>} />
         
                <Route  path ="/SearchDetails/:id" element ={<SearchDetails recipe={props.recipe}/>} />
            </Routes> 
        </div>
)
}