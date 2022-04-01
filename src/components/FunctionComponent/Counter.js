import React , {useEffect, useState}from "react";

export default function Counter(props){
 let {onCountChanged}=props;
     let [count,setCount]=useState(0);
     let [title,setTitle]=useState("Hello Counter");
    
    useEffect(()=>{
        onCountChanged(count);
    },[count])
   let increment = () => {
       setCount(count+1);
    }
   let decrement = () => {
       if (count !==0){
        setCount(count-1);
       }
        
    }
   let changeHandler=()=>{
    setTitle("Title Changed");
   } 

    return(

<div className="alert alert-danger m-3 p-3">
<h1>{title}</h1>
<button className="btn btn-success m-3 " onClick={changeHandler}>Change Title</button>
<button className="btn btn-success m-3 " onClick={increment}>+</button>
<span className="">{count}</span>
{count === 0 && <span> Count Cant be less than zero </span> }
<button className="btn btn-warning m-3 " onClick={decrement}>-</button>
</div>
);
}