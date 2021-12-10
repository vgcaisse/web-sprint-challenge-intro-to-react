// Write your Character component here
import React from "react"
// import styled from "styled-components";

export default function Character(props) {
    console.log(props);

    return (
        <div className="Character">
            <h1>{props.name}</h1>
            {/* {
                char.map((char) => {
                    <h1>{props.name}</h1>
                })                
            } */}
        </div>
    )
}