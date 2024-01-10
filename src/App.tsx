import './App.css';
import NavComponent from './components/Header';
import { Outlet } from 'react-router-dom';


function App() {
  return (
    <>
      <NavComponent/>
      <div className='container'>
        <Outlet/>
      </div>
    </>
  );
}

export default App;
