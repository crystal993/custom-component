import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Toggle from './component/Toggle';
import Modal from './component/Modal';

function App() {

  // Toggle
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

  //modal
  const [modalIsOpen, setModalIsOpen] = useState(false);

  //modal 변경 함수
  const onModal = () => {
    setModalIsOpen(!modalIsOpen)
  }

  return (
    <div className="App">
      
      {/* toggle */}
      <Toggle rounded={true} isToggled={isToggled} onToggle={changeToggle} ToggleTextNum={ToggleTextNum} ToggleText={ToggleText} />
      
      {/* modal */}
      <button onClick={onModal} className='btn-modal'>
        Open Modal
      </button>
      
      {modalIsOpen ? 
        <Modal onModal={onModal} /> : null}
    </div>
  );
}

export default App;
