import { Link } from 'react-router-dom'

export default function Nav (){
    return (
        
        <div className="nav">
            <div id="nav-itm"><Link to="/"> Home </Link></div>
            <div id="nav-itm"><Link to="/Categories"> Categories </Link></div>
            <div id="nav-itm"><Link to="/Contact"> Contact </Link></div>
        </div>
)
}

