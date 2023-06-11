import React, { useState } from "react"
import { Button, Input, Label } from "reactstrap"
import ModalComponent from "./components/ModalComponent"
import "./App.css"

const App = () => {

  const [name, setName] = useState('')

  const handleReset = () => {
    setName('');
  }

  const handleInputChange = (e) => {
    setName(e.target.value);
  };

  return (
    <div 
    className="backimg"
    >
      <div className="entire-content">

        <h1>Preparedness Assessment</h1>

        <div className="form">

          <div className="input">
            <Label for="name">Enter your name</Label>
            <Input
            type='text'
            value={name}
            onChange={handleInputChange}
            />
          </div>

          <div className="buttonsCon">
            <ModalComponent name={name}/>
            <Button
              type="button"
              className="btn btn-primary buttons"
              onClick={handleReset}
            >Reset</Button>
          </div>

        </div>
      </div>
    </div>
  )
}

export default App
