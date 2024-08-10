import logo from './logo.svg';
import './App.css';
import Addtodo from './components/Addtodo';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SearchTodo from './components/SearchTodo';
import ViewallTodo from './components/ViewallTodo';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Addtodo/>}/>
      <Route path='/search' element={<SearchTodo/>}/>
      <Route path='/viewall' element={<ViewallTodo/>}/>
    </Routes>
    </BrowserRouter>
    
  );
}

export default App;
