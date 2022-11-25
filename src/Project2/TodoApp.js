import React, { useReducer } from "react";
import { initialState, reducer } from "./todo.reducer.js";
import Todo from "./Todo.js";
import AddTodo from "./AddTodo.js";

const TodoApp = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (<>
    <AddTodo
      add={text => dispatch({type: "add", text: text})}
    />
    {state.todos.map(t => (
      <Todo
        key={t.id}
        todo={t}
        remove={() => dispatch({type: "remove", id: t.id})}
        edit={text => dispatch({type: "edit", id: t.id, text: text})}
      />
    ))}
  </>);
}
export default TodoApp;