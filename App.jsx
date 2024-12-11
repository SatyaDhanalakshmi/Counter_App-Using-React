import './App.css';
// import 'node_modules\bootstrap\dist\css\bootstrap.min.css'

import {useState} from 'react';
function App(){
  const [counter,setCounter]=useState(0);
  const increment=()=>{
    // if(counter<stop){
      setCounter(counter+1)
    // }
  }
  const decrement=()=>{
    // if(counter>0){
    setCounter(counter-1)
    // } 
  }
  const stop=50;
  return(
    <div class='table'>
    <h1 className='head text-success'>Counter App in React</h1>
    <div className='Wrapper'>
      <button className="btn btn-primary" disabled={counter===stop} onClick={increment}>Increment</button>
      <p className='counter'>{counter}</p>
      <button className="btn btn-danger" disabled={counter===0} onClick={decrement}>Decrement</button>
    </div>
    </div>
  )
}

export default App;