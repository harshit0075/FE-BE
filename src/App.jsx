import './App.css';
import {Routes,Route} from "react-router-dom"
import { Login } from './Components/Login';
import { Signup } from './Components/Signup';
import { AddNote } from './Components/AddNote';
import { Note } from './Components/Note';

function App() {
  return (
    <div className="App">
      <h1>Notes Application</h1>
      <Routes>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/createnote' element={<AddNote/>}/>
        <Route path='/notes' element={<Note/>}/>
      </Routes>
    </div>
  );
}

export default App;
