import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Pages/Login";
import Home from "./Pages/Home";
import Dashboard from "./Pages/Dashboard";
import PrivateRoute from "./PrivateRoute";
import { AuthProvider } from './AuthContext';
import PageNotfound from "./Pages/PageNotfound";

const App = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='*' element={<PageNotfound />} />
          <Route path="/dashboard" element={<PrivateRoute element={Dashboard} />} />
          <Route path="/home" element={<PrivateRoute element={Home} />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
};

export default App;
