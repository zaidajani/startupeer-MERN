import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { LogoutView } from "./screens/loggedOut.screen";
import { Register } from "./screens/lognreg/register.screen";
import { Login } from "./screens/lognreg/login.screen";
import { AuthenticatedView } from "./screens/authenticatedView/authenticatedView.screen";
import { Form } from "./screens/form/form.screen";
import { StartupDetail } from "./screens/startupDetail.screen";

function App() {
  const [user, setUser] = React.useState("");

  React.useEffect(() => {
    if (localStorage.getItem("token")) {
      setUser(true);
    } else {
      setUser(false);
    }
  });

  return (
    <>
      <BrowserRouter>
        <Routes>
          {user ? (
            <>
              <Route path="/" element={<AuthenticatedView />} />
              <Route path="/add" element={<Form />} />
              <Route path="/login" element={<Navigate to="/" />} />
              <Route path="/register" element={<Navigate to="/" />} />
              <Route path="/detail" element={<StartupDetail />} />
            </>
          ) : (
            <>
              <Route path="/" element={<LogoutView />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/detail" element={<StartupDetail />} />
            </>
          )}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
