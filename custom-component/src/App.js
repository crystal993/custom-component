import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Toggle from './component/Toggle';

function App() {

  const [isToggled, setIsToggled] = useState(false)
  const [ToggleTextNum, setToggleTextNum] = useState(0)

  const ToggleText = ["Toggle Switch OFF","Toggle Switch On"]

  // Toggle 변경 함수
  const changeToggle = ()=>{

    setIsToggled(!isToggled)

    if(isToggled){
      setToggleTextNum(0)
    } else {
      setToggleTextNum(1)
    }
  }

  return (
    <div className="App">
      <Toggle rounded={true} isToggled={isToggled} onToggle={changeToggle} ToggleTextNum={ToggleTextNum} ToggleText={ToggleText} />
    </div>
  );
}

export default App;
