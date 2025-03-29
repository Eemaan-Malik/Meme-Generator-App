import React from "react"
import "./index.css"

export default function Header(props) {
    return (
        <header className="header">
           <img className="header--image" src={props.image} alt={props.alt} />
            <h2 className="header--title">Meme Generator</h2>
            <h4 className="header--project">React Course - Project 3</h4>
        </header>
    )
}