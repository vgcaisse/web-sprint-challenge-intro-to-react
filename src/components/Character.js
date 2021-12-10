// Write your Character component here
import React from "react"
import styled from "styled-components";

const StyledH2 = styled.h2`
    color: teal;
` 

export default function Character(props) {
    console.log(props);
    
    // const { name } = props;

    return (
        <div className="luke">
            <StyledH2>{props.name}</StyledH2>
        </div>
    )
}