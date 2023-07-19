import './App.css';
import Calendar from './components/Calendar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Add from './components/Add';
import Edit from './components/Edit';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Calendar />}/>
          <Route path='create' element={<Add/>}/>
          <Route path='edit/:id' element={<Edit/>}/>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
