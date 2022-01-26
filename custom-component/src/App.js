import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Toggle from './component/Toggle';

function App() {

  let[isChecked, handleToggle] = useState(true)

  return (
    <div className="App">
      <Toggle isChecked={isChecked} handleToggle={handleToggle}/>
    </div>
  );
}

export default App;
