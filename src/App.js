import "./App.css";
import Employee from "./components/Employee";

function App() {
    return (
        <>
            <div className="flex flex-wrap">
                <Employee
                    name={"sudo"}
                    role={"developer BD"}
                    image={
                        "https://tigerbeat.com/wp-content/uploads/2018/11/Screen-Shot-2018-11-13-at-9.27.45-AM-960x640.png"
                    }
                />
                <Employee
                    name={"roses"}
                    role={"designer"}
                    image={
                        "https://tigerbeat.com/wp-content/uploads/2018/11/Screen-Shot-2018-11-13-at-9.27.45-AM-960x640.png"
                    }
                />
                <Employee
                    name={"roses"}
                    role={"designer"}
                    image={
                        "https://tigerbeat.com/wp-content/uploads/2018/11/Screen-Shot-2018-11-13-at-9.27.45-AM-960x640.png"
                    }
                />
                <Employee
                    name={"sudo"}
                    role={"developer FD"}
                    image={
                        "https://tigerbeat.com/wp-content/uploads/2018/11/Screen-Shot-2018-11-13-at-9.27.45-AM-960x640.png"
                    }
                />
            </div>
        </>
    );
}

export default App;
