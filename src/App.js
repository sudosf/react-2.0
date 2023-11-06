import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import Employees from "./pages/Employees";
import NavBar from "./components/NavBar";

function App() {
    return (
        <NavBar>
            <Employees />
        </NavBar>
    );
} 

export default App;
