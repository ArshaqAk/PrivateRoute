import React from 'react'
import { useAuth } from '../AuthContext';
import { useNavigate } from 'react-router-dom';
const Login = () => {
  const { login } = useAuth();
  const navigate=useNavigate()

  const handleLogin=()=>{
    login();
    navigate('/home')
  }
  return (
    <div>
      Login

      <div>
        <button className='btn btn-success' onClick={handleLogin}>Login</button>
      </div>
      
    </div>
  )
}

export default Login
