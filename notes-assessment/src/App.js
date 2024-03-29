import Navbar from './components/Layout/Navbar/Navbar';
import Input from './components/UI/Input/Input';
import Notes from './components/Layout/Notes/Notes';
import { useState } from 'react';

function App(props) {
  const [note, setNote] = useState([])

  const addNote = (note) => {
    setNote(note)
  }

  return (
    <>
      <Navbar />
      <Input onSubmit={addNote}/>
      <Notes onAdd={note}/>
    </>
  );
}

export default App;
