import { useState } from "react"


const Contact = () => {
let initialState = {
    name: '',
    email: '',
    message: ''
} 

const [formState, setformState] = useState(initialState)

const handleSubmit = (event) => {
    event.preventDefault()
    console.log(formState)
    setformState(initialState)
}

const handleChange = event => setformState({...formState,[event.target.id]: event.target.value})


    return (
    <div id="contact">
        <h2 id="contactTitle">Contact Us</h2>
        <form id="contactForm" onSubmit={handleSubmit}>

                <label htmlFor='name'>Name</label>
                     <input type='text' id='name' onChange={handleChange} value={formState.name}/>

                <label htmlFor="email">E-Mail</label>
                     <input type="text" id='email' onChange={handleChange} value={formState.email}/>

                <label htmlFor="message">Message</label>
                    <textarea id='message' onChange={handleChange} value={formState.message} cols={40} rows={10}></textarea>


                <button type="submit">Submit</button>
        </form>
    </div>
    )
    }

    export default Contact
