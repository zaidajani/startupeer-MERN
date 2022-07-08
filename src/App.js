import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { LogoutView } from './screens/loggedOut.screen';
import { StartupDetail } from './screens/startupDetail.screen';

function App() {
  return (
    <>
      <LogoutView />
    </>
  );
}

export default App;
