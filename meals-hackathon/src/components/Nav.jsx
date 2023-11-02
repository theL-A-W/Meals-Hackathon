import { Link } from 'react-router-dom'


export default function Nav (){




    return (
        <div>
            <div className="nav">
                <Link to="/"> Home <div className="navItm"></div></Link>
                <Link to="/Categories"> Categories <div className="navItm"></div> </Link>
                <div className="navItm"><Link to="/Contact"> Contact </Link></div>
            </div>
            {/* <button id="surprise" onClick={() => {showModal= true}}>Surprise</button> */}


            
         </div>
)
}

