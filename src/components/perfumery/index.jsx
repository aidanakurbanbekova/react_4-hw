import React from "react";
// import styles from './style.module.css'

const PerfumeryList = (props) => {

return (
    <div>
        <p key={props.id}>{props.name}</p>
        <button onClick= {props.onClick}>delete </button>
    </div>

    )
}
export default PerfumeryList;