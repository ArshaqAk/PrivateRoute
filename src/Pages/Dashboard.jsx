import React from 'react'
import { useAuth } from '../AuthContext';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const { logout } = useAuth();
  const navigate=useNavigate()

  const handleSignout = () => {
    logout();
    navigate('/')
  }
  return (
    <div>
      Dashboard
      <br />
      <button onClick={handleSignout}>Signout</button>
    </div>
  )
}

export default Dashboard
