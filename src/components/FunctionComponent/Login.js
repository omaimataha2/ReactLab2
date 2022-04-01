import React, { useEffect, useState,useRef } from "react";
export default function Login(props){
    let {onDataFromChildChanged}=props;
    let [inputValue,setInputValue] = useState("");
    let myRef=useRef();

    useEffect(()=>{
        myRef.current.focus();
    },[])
   useEffect(()=>{
        onDataFromChildChanged(inputValue);
    }, [inputValue]);
    let changeHandler=(e)=>{
        setInputValue (e.target.value);
      
};
    return(
<div className="alert alert-danger m-3 p-3">
<input ref={myRef} className="form-control" type="text" placeholder="search" onChange={(e)=>{
    changeHandler(e)
}}></input>
<p>You Typed : {inputValue}</p>
</div>
);
}