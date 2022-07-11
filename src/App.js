import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { LogoutView } from './screens/loggedOut.screen';
import { Register } from './screens/lognreg/register.screen';
import { Login } from './screens/lognreg/login.screen';
import { StartupDetail } from './screens/startupDetail.screen';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LogoutView />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/detail" element={<StartupDetail />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
