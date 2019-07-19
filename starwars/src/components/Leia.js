import React from 'react';
import { Card } from 'semantic-ui-react';
import styled from 'styled-components'

function Leia({ leia }) {
    // console.log(luke)
    return (
        <div>
            <h2>{leia.map((el, index)=> index < 7 ? <p>{el}</p> : false)}</h2>
        </div>
    );
}

export default Leia;