import Nav from './Nav'


export default function Header (){
    return (
        
        <div className="header">
                <Nav/>     
            <h1 className='title'>Meals Hackathon</h1>
            <div id="search">
                    <form>
                        <input placeholder="search" id="search-bar"></input>
                        <button id="submit-search">Enter</button>
                    </form>
             </div>


        </div>
)
}