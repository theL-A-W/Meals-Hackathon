import { Link } from 'react-router-dom'


export default function Nav (){




    return (
        <div>
            <div className="nav">
                <div className="navItm"><Link to="/"> Home </Link></div>
                <div className="navItm"><Link to="/Categories"> Categories </Link></div>
                <div className="navItm"><Link to="/Contact"> Contact </Link></div>
            </div>
            {/* <button id="surprise" onClick={() => {showModal= true}}>Surprise</button> */}


            
         </div>
)
}

