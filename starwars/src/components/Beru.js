import React from 'react';
import { Card } from 'semantic-ui-react';
import styled from 'styled-components'

function Beru({ beru }) {
    // console.log(luke)
    return (
        <div>
            <h2>{beru.map((el, index)=> index < 7 ? <p>{el}</p> : false)}</h2>
        </div>
    );
}

export default Beru;