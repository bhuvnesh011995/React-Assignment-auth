import './App.css';
import { BrowserRouter,Routes,Route, useNavigate } from 'react-router-dom';
import Navbar from './Component/Navbar/Navbar';
import Home from './Component/Home/Home';
import Signup from './Component/SignUp/Signup';
import Login from './Component/Login/Login';
import AdminPage from './Component/Admin/Admin';
import EmployeePage from './Component/Employee/Employee';
import { useContext, useEffect } from 'react';
import { authContext } from './wrapper/Auth.context';

function App() {
  const {setAuth}=useContext(authContext)


  return (
    <div className="app">
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/users/signUp' element={<Signup />} />
        <Route path='/users/logIn' element={<Login />} />
        <Route path="users/admin/" element={<AdminPage/>} />
        <Route path='/users/employee/' element={<EmployeePage/>}/>
      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
