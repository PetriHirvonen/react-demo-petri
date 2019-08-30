import React from 'react';
import TodoItem from './todoitem';
import TodosData from './todosData';

class TodosApp extends React.Component {
    constructor() {
        super()
        this.state = {
            todos: TodosData
        }
        this.handleChange = this.handleChange.bind(this)
    }

    // Tämä tekee sen että tick box marksit oikeasti pelaavat ruudulla(kin):
    handleChange(id) {
        console.log("muutettu", id)
        this.setState(prevState => {
            const kokonaanuusiTodosarray = prevState.todos.map(todo => {
                // jos nykyisessä todo listassa on joku id on sama kuin mikä tulee täältä tickaamalla changehandlerillä,
                // sen state pitää muuttaa:
                if (todo.id === id) {
                    todo.completed = !todo.completed
                }
                return todo
            })
            return {
                todos: kokonaanuusiTodosarray
            }
        })
    }
    
    render() {
        const todoItems = this.state.todos.map(dataitemi => <TodoItem key={dataitemi.id} item={dataitemi} 
            handleChange={this.handleChange}/>)
    
        return (
            <div className="todolistcss">
                {todoItems}
            </div>
        )
    }
}

export default TodosApp;



//Alkuperäinen solution (jota ei voinut muokata tikkaamalla), kun tämä js file oli vielä function:
//function TodosApp () {
    //const todoItems = TodosData.map(dataitemi => <TodoItem key={dataitemi.id} item={dataitemi}/>)
    //jos käytää y.o:ta pitää todoitem.js filessä olla <p>{props.item.text}</p>
    // jos käytää a.o:ta pitää todoitem.js filessä olla <p>{props.item}</p>
    // const todoItems = TodosData.map(dataitemi => <TodoItem key={dataitemi.id} item={dataitemi.text}/>)

