import React from 'react'

const buttonStyle = {
    backgroundColor: "#61DAFB",
    color: "white",
    fontSize: "14px",
    padding: "5px 30px",
    borderRadius: "5px",
    margin: "10px 5px",
    cursor: "pointer"

}

function TodoCard(props) {
    const { title, clickToRemove, index} = props ////////// remove all props now this is destructuring
    return (
        <li style={{color: "#61DAFB"}}>{title}
         <button style={buttonStyle} onClick={() => {clickToRemove(index)}}>Delete</button>
        </li>
       
    )
}

export default TodoCard