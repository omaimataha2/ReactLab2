import React from "react";
export default function Slider(props){
let {count}=props;
    return(
<div className="alert alert-danger m-3 p-3">
<h1>Hello from Slider</h1>
<h2 className="text-success">Count from counter : {count}</h2>
<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
</p>
</div>
);
}