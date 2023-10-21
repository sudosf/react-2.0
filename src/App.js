import "./App.css";
import Employee from "./components/Employee";
import React from "react";
import { v4 as uuidv4 } from "uuid";

function App() {
    const [employees, setEmployees] = React.useState([
        {
            name: "sudo",
            role: "developer",
            image: "https://t4.ftcdn.net/jpg/05/76/99/61/360_F_576996176_aQDw1xaBc6AHKTVuTHN6IsrakeYLScHK.jpg",
        },
        {
            name: "roses",
            role: "designer",
            image: "https://tigerbeat.com/wp-content/uploads/2018/11/Screen-Shot-2018-11-13-at-9.27.45-AM-960x640.png",
        },
        {
            name: "Siya",
            role: "engineer",
            image: "https://lh3.googleusercontent.com/aWXbu99DVyzLf2KJuhhArUzacyV4TUqHF4A7A2fiX4EPBen7F-PmuHIiqHfSAG0WVY97V1gHhKoK-h-22WuleQLR=w640-h400-e365-rj-sc0x00ffffff",
        },
        {
            name: "Poly",
            role: "artist",
            image: "https://www.broadwayworld.com/ezoimgfmt/cloudimages.broadwayworld.com/upload12/1856710/tn-500_ffp07.jpg?ezimgfmt=rs:0x0/rscb37/ngcb36/notWebP",
        },
        {
            name: "sudo",
            role: "developer",
            image: "https://t4.ftcdn.net/jpg/05/76/99/61/360_F_576996176_aQDw1xaBc6AHKTVuTHN6IsrakeYLScHK.jpg",
        },
        {
            name: "roses",
            role: "designer",
            image: "https://tigerbeat.com/wp-content/uploads/2018/11/Screen-Shot-2018-11-13-at-9.27.45-AM-960x640.png",
        },
    ]);

    return (
        <>
            <div className="flex flex-wrap">
                {employees.map((employee) => (
                    <Employee key={uuidv4()} {...employee} />
                ))}
            </div>
        </>
    );
}

export default App;
