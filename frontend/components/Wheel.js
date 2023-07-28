import React from 'react'
import { moveClockwise, moveCounterClockwise } from '../state/action-creators'
import { connect } from 'react-redux'
export function Wheel(props) {
  const {moveClockwise, moveCounterClockwise} = props
  const handleClockwise = () =>{
    const index = props.activeWheel;
    if(index === 5)
      moveClockwise(0)
    else
      moveClockwise(index+1)
  }
  const handleCounterClockwise = () =>{
    const index = props.activeWheel;
    if(index === 0)
      moveCounterClockwise(5)
    else 
      moveCounterClockwise(index-1)
  }

  return (
    
    <div id="wrapper">
      <div id="wheel">

        {/* play with this map function later */}
        {/* {
          [0,1,2,3,4,5].map(idx =>{
            {console.log(idx, props.activeWheel)}
            
            <div className={`cog${props.activeWheel===idx?' active':''}`} style={{"--i":idx}}>{props.activeWheel === idx? 'B':null}</div>         
           })
        } */}

        <div className={`cog${props.activeWheel===0? ' active': ''}`} style={{ "--i": 0 }}>{props.activeWheel ===0? 'B':null}</div>

        <div className={`cog${props.activeWheel===1?' active': ''}`} style={{ "--i": 1 }}>{props.activeWheel ===1? 'B':null}</div>

        <div className={`cog${props.activeWheel===2?' active': ''}`} style={{ "--i": 2 }}>{props.activeWheel ===2? 'B':null}</div>

        <div className={`cog${props.activeWheel===3?' active': ''}`} style={{ "--i": 3 }}>{props.activeWheel ===3? 'B':null}</div>

        <div className={`cog${props.activeWheel===4?' active': ''}`} style={{ "--i": 4 }}>{props.activeWheel ===4? 'B':null}</div>

        <div className={`cog${props.activeWheel===5?' active': ''}`} style={{ "--i": 5 }}>{props.activeWheel ===5? 'B':null}</div>
        {/* --i is a custom CSS property, no need to touch that nor the style object */}
      </div>
      <div id="keypad">
        <button id="counterClockwiseBtn" onClick={handleCounterClockwise}>Counter clockwise</button>
        <button id="clockwiseBtn" onClick={handleClockwise}>Clockwise</button>
      </div>
    </div>
  )
}

const mapStateToProps = state =>{
  return {activeWheel: state.wheel}
}

export default connect(mapStateToProps,{moveClockwise,moveCounterClockwise})(Wheel)
