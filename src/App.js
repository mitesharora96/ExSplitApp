import { Outlet } from 'react-router-dom';
import './App.css';
import Navigator from './Components/Navigator';
import Header from './Components/Header';

function App() {
  return (
    <>
      {/* <Navigator></Navigator> */}
      <Header></Header>
      <Outlet></Outlet>
    </>
  );
}

export default App;
