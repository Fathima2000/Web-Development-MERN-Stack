import './App.css';
import {useState, useEffect} from 'react';

function App() {

  const [text, setText] = useState('');
  
  //1. Every render
  // useEffect(() => {
  //   console.log("UI rendered");
  // });
  
  //2. Only during 1st render
  // useEffect(() => {
  //   console.log("UI rendered");
  // },[]);

  //3. during 1st render + dependecy- only ehn text changed
  // useEffect(() => {
  //   console.log("UI rendered");
  // },[text]);

  // 3. handling unmounting of component
  useEffect(() => {
    console.log("listener added");

    //cleaning k liye use hota
    return () => {
      console.log("listener removed");
    }
  },[text]);

  function changeHandler(event){
    setText(event.target.value);
    console.log(text);
  }

  return (
    <div className="App">
      <input type="text" onChange={changeHandler}></input>
    </div>
  );
}

export default App;
