import React from "react";
const Input = (props) => {
    const {f,d,l,n,t, oc, v} = props;
    return(
        <div className="row">
        <div className="col s10 offset-s1 m6 l3 offset-l4">
        <label htmlFor={f}>{l}</label>
        <input value={v} name={n} id={d} type={t} className="validate" onChange={oc}/>
          
        </div>
        </div>
    )
}
export default Input;