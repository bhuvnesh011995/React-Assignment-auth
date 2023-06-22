import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Navbar from './Component/Navbar/Navbar';
import Home from './Component/Home/Home';
import Signup from './Component/SignUp/Signup';
import Login from './Component/Login/Login';

function App() {
  return (
    <div className="app">
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/signUp' element={<Signup />} />
        <Route path='/logIn' element={<Login />} />
      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
