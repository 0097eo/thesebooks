import React from "react";

function Card({books}){
    return (
        <div className = "book">

            <h2>{books.title}</h2>
            <img src={books.image} alt={books.title} />
            <p>{books.author}</p>
            <p>{books.description}</p>
            <p>{books.detailedDescription}</p>
        </div>
    )

}

export default Card