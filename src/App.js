import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Coffee from './pages/container/Coffee';
import Menu from './pages/detailmain/Menu';
import Main from './pages/Main';
import Findid from './pages/member/Findid';
import Findpassword from './pages/member/Findpassword';
import Join from './pages/member/Join';
import Login from './pages/member/Login';
import WriteCoffee from './write/WriteCoffee';


function App() {
  return (
    <div className="App">  
    <Header/>
      <Routes>
        <Route path='/' element={<Main/>} />
        <Route path='/Login' element={<Login/>}/> 
        <Route path='/Menu' element={<Menu/>}/>
        <Route path='/Coffee' element={<Coffee/>}/> 
        <Route path='/Join' element={<Join/>}/>
        <Route path='/Findid' element={<Findid/>}/> 
        <Route path='/Findpass' element={<Findpassword/>}/>
        <Route path='/Writecoffee' element={<WriteCoffee/>}/>    
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
