import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { LogoutView } from './screens/loggedOut.screen';
import { Register } from './screens/lognreg/register.screen';
import { Login } from './screens/lognreg/login.screen';
import { StartupDetail } from './screens/startupDetail.screen';

function App() {
  return (
    <>
      <Login />
    </>
  );
}

export default App;
