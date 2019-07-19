import React from 'react';
import { Card } from 'semantic-ui-react';
import styled from 'styled-components'
// import "semantic-ui-css/semantic.min.css";


function StarWarsCards({ names, heights, weights }) {
    return (
        <div>
            {names.map(name => <h1>{name}</h1>)}
            {heights.map(height => <p>{height}</p>)}
        </div>
        
        // <div className="ui card" >
        //     <div class="content">
        //         <div className="header">Cute Dog</div>
        //         <div className="meta">2 days ago</div>
        //         <div className="description">
        //             <p>Cute dogs come in a variety of shapes and sizes. Some cute dogs are cute for their adorable faces, others for their tiny stature, and even others for their massive size.</p>
        //             <p>Many people also have their own barometers for what makes a cute dog.</p>
        //         </div>
        //     </div>
        // </div >
    )
}

export default StarWarsCards;