// Write your Character component here
import React from "react"
// import styled from "styled-components";

export default function Character(props) {
    console.log(props);
    
    // const { name } = props;

    return (
        <div className="Character">
            <h2>{props.name}</h2>
        </div>
    )
}