import React from "react"

const viewCards = (props) => {

   return (
    <div>
        <h3> title: {props.title} </h3>
        <h4> date: {props.date} </h4>
        <p> description: {props.description} </p>
        <p> longitude: {props.longitude} </p>
        <p> latitude: {props.latitude} </p>
    </div>

   ) 
}

export default viewCards