import React from 'react'

const App = () => {
  function btnClicked(){
    console.log('button is clicked ');
    
  }
  function mouseEnter(){
    console.log('mouse Entred');
    
  }
  return (
    <div>
      <h1>Hello, Bharat</h1>
      <button  onMouseEnter={mouseEnter} onClick={btnClicked}>Click here</button>
    </div>
  )
}

export default App