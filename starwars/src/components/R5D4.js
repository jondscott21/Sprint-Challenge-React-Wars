import React from 'react';
import { Card } from 'semantic-ui-react';
import styled from 'styled-components'

function R5D4({ r5d4 }) {
    // console.log(luke)
    return (
        <div>
            <h2>{r5d4.map((el, index)=> index < 7 ? <p>{el}</p> : false)}</h2>
        </div>
    );
}

export default R5D4;