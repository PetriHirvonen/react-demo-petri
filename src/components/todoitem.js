import React from 'react';
   
function TodoItem (props) {
    const tickattutyyli = {
        fontStyle: "italic",
        color: "#cdcdcd",
        textDecoration: "line-through"
    }
        
    return (
        <div className="todocss">
            <input 
                type="checkbox"  
                // seuraava määrää että jos joku box on checked, se näkyy checkattuna, ja päinvastoin:
                checked={props.item.completed}
                // onChange={() => console.log("changed")}
                onChange={() => props.handleChange(props.item.id)}
            />
            {/* <p>{props.item.text}</p> */}
            {/* <p>{props.item}</p> */}
            {/* Seuraavassa on terniary: "if props.item.completed is TRUE, then use tickattutyyli, and if false, then use null style (eli ei mitään erikseen määriteltyä) */}
            <p style={props.item.completed ? tickattutyyli: null } > {props.item.text}</p>

        </div>
    );
}

export default TodoItem;





// HUOM: Ennen oli kovakoodattu näin, siis ennen kuin laitettiin tämä hyväksymään propseja:
// function TodoItem () {
//         return (
//             <div className="todocss">   
//                 <input type="checkbox" />
//                 <p>placeholder tekstiä</p>
//             </div>
//         );
// }



