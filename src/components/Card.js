import React from "react"; // We need this import otherwise our program won't understands JSX synthax
import './Card.css'

const Card = ({name, email, id}) => { // We pass the parameters on the function to use it
    return (
        <>
            <div id="card" className="tc dib br3 pa3 ma2 grow bw2 shadow-5">
                <img src={`https://robohash.org/${id}?200x200&set=set4`} alt=""/>
                <div>
                    <h2>{name}</h2>
                    <p>{email}</p>
                </div> 
            </div>
        </>
    )
}

export default Card