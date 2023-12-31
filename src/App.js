import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import Employees from "./pages/Employees";
import NavBar from "./components/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Customers from "./pages/Customers";
import Dictionary from "./pages/Dictionary";
import NotFound from "./components/NotFound";
import Definition from "./pages/Definition";

function App() {
    return (
        <BrowserRouter>
            <NavBar>
                <Routes>
                    <Route path="/employees" element={<Employees />} />
                    <Route path="/customers" element={<Customers />} />
                    <Route path="/dictionary" element={<Dictionary />} />
                    <Route
                        path="/dictionary/:search"
                        element={<Definition />}
                    />
                    <Route path="/404" element={<NotFound />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </NavBar>
        </BrowserRouter>
    );
}

export default App;
