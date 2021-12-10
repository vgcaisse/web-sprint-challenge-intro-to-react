// Write your Character component here
import React from "react"
import styled from "styled-components";

const StyledH2 = styled.h2`
    color: teal;
    border-bottom: 8px dotted green;
` 

export default function Character(props) {
    console.log(props);

    return (
        <div className="Character-Names">
            <StyledH2>{props.name}</StyledH2>
        </div>
    )
}