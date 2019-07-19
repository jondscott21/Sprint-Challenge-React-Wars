import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import styled from 'styled-components'
import Luke from './components/Luke'
import C3PO from './components/C3PO'
import R2D2 from './components/R2D2'
import DarthVader from './components/DarthVader'
import Leia from './components/Leia'
import Beru from './components/Beru'
import Owen from './components/Owen'
import R5D4 from './components/R5D4'
import Biggs from './components/Biggs'
import Obiwan from './components/Obiwan'

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  const [luke, setLuke] = useState([])
  const [c3po, setC3po] = useState([])
  const [r2d2, setR2d2] = useState([])
  const [darthVader, setDarthVader] = useState([])
  const [leia, setLeia] = useState([])
  const [owen, setOwen] = useState([])
  const [beru, setBeru] = useState([])
  const [r5d4, setR5d4] = useState([])
  const [biggs, setBiggs] = useState([])
  const [obiwan, setObiwan] = useState([])

  useEffect(() => {
    axios.get(`https://swapi.co/api/people/`)
    .then(res => {
      const peopleObj = res.data.results
      console.log(peopleObj)
      setLuke(Object.values(peopleObj[0]))
      setC3po(Object.values(peopleObj[1]))
      setR2d2(Object.values(peopleObj[2]))
      setDarthVader(Object.values(peopleObj[3]))
      setLeia(Object.values(peopleObj[4]))
      setOwen(Object.values(peopleObj[5]))
      setR5d4(Object.values(peopleObj[6]))
      setBeru(Object.values(peopleObj[7]))
      setBiggs(Object.values(peopleObj[8]))
      setObiwan(Object.values(peopleObj[9]))
    })
    .catch(error => console.log('error', error))
  }, [])

  const Div = styled.div`
    margin-top: 100px;
    display: flex;
    justify-content: center;
  `

  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      <Div>
        <Luke luke={luke} />
        <C3PO c3po={c3po} />
        <R2D2 r2d2={r2d2} />
        <DarthVader darthVader={darthVader} />
        <Leia leia={leia} />
        <Owen owen={owen} />
        <Beru beru={beru} />
        <R5D4 r5d4={r5d4} />
        <Biggs biggs={biggs} />
        <Obiwan obiwan={obiwan} />
      </Div>
    </div>
  );
}

export default App;
