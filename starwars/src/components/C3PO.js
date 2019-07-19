import React from 'react';
import { Card } from 'semantic-ui-react';
import styled from 'styled-components'

function C3PO({ c3po }) {
    // console.log(luke)
    return (
        <div>
            <h2>{c3po.map((el, index)=> index < 7 ? <p>{el}</p> : false)}</h2>
        </div>
    );
}

export default C3PO;