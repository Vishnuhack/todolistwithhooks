import React, { useState,useRef ,useEffect} from "react";

const App = () => {
 
  const [search, setSearch] = useState("");

  const input = useRef(null);

  useEffect(() => {
    input.current.focus()
  }, [])

  const updateSearch = (e) => {
    setSearch(input.current.value);
    console.log(search);
  };
  const [list, setList] = useState([]);
  const updateList = () => {
    setList([...list, search]);
  };

  return (
    <div>
      <h1>Welcome on your todolist</h1>
      
      <input type="text" onChange={updateSearch} ref={input} />
      <button onClick={updateList}>enter</button>
      
      {list.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </div>
  );
};

export default App;
