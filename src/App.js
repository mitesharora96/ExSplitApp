import { Outlet } from 'react-router-dom';
import './App.css';
import Navigator from './Components/Navigator';
import Header from './Components/Header';

function App() {
  {
    let user = {
      memberName: 'Mitesh Arora',
      memberEmail:'mitesh@gmail.com'
    }
    localStorage.setItem('CurrentUser',JSON.stringify(user))
  }
  
  return (
    <>
      {/* <Navigator></Navigator> */}
      <Header></Header>
      <Outlet></Outlet>
    </>
  );
}

export default App;
