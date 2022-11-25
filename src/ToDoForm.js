import React,{useState} from 'react'

const ToDoform = ({addTask}) => {
    const [userInput , setuserInput] = useState('')

    const handleChange = (e) => {
        setuserInput(e.currentTarget.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault ();
        addTask(userInput);
        setuserInput("");
    }
    return (
        <form onSubmit = {handleSubmit}>
            <input value={userInput} type = "text" onChange = {handleChange} placeholder = "Enter task .." />
            <button> Submit </button>
        </form>
    );
};

export default ToDoform;