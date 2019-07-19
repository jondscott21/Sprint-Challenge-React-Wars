import React from 'react';
import { Card } from 'semantic-ui-react';
import styled from 'styled-components'

function R2D2({ r2d2 }) {
    // console.log(luke)
    return (
        <div>
            <h2>{r2d2.map((el, index)=> index < 7 ? <p>{el}</p> : false)}</h2>
        </div>
    );
}

export default R2D2;