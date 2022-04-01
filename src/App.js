import './App.css';
import OurNav from './components/OurNav';
import Slider from './components/FunctionComponent/Slider';
import Counter from './components/FunctionComponent/Counter';
import Login from './components/FunctionComponent/Login';
import Footer from './components/FunctionComponent/Footer';
import { useState } from 'react';

function App() {
  let [dataFromChild,setDataFromChild]=useState();
  let [count,setCount]=useState();


let onDataFromChildChanged=(data)=>{
  setDataFromChild(data);
};
let onCountChanged=(data)=>{
setCount(data);
}
    return ( < >
        < OurNav /> 
        <p className='m-3 p-3'>Your input : {dataFromChild}</p>
        <Login onDataFromChildChanged={onDataFromChildChanged} />
        < Slider count={count} />
        <Counter onCountChanged={onCountChanged} />
        
      < Footer />

        </>

    );
}

export default App;