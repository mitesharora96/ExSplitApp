import { Outlet } from 'react-router-dom';
import './App.css';
import Navigator from './Components/Navigator';

function App() {
  return (
    <>
      <Navigator></Navigator>
      <Outlet></Outlet>
    </>
  );
}

export default App;
