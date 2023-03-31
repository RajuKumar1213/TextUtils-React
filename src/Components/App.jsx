import React, { useState } from "react";
// import { BrowserRouter as Router,Switch, Route, Routes } from 'react-router-dom'
import Alert from "./Alert";
// import About from "./About";
import Navbar from "./Navbar";
import TextForm from "./TextForm";

// import {
//     BrowserRouter as Router,
//     Switch,
//     Route,
// } from "react-router-dom";

function App() {

    const [mode, setMode] = useState("light");
    const [alert, setAlert] = useState(null);

    const showAlert = (msg, type) => {
        setAlert({
            message: msg,
            type: type
        })

        setTimeout(() => {
            setAlert(null)
        }, 1500);
    }

    const toggleMode = () => {
        if (mode === "light") {
            setMode("dark");
            document.body.style.backgroundColor = "#061f38";
            showAlert("Dark mode had been enabled !", "success");
            document.title = "TextUtlis-Dark mode";
        }
        else {
            setMode("light");
            document.body.style.backgroundColor = "white";
            showAlert("Light mode had been enabled!", "success");
            document.title = "TextUtlis-Light mode";

        }
    }

    return (
        // <Router>
            <>
                <Navbar navTitle="TextUtiles" mailUs="Email Us" mode={mode} toggleMode={toggleMode} />
                <Alert alert={alert} />

                {/* <Switch>
                    <Route exact path="/about">
                        <About mode={mode}/>
                    </Route>
                    <Route exact path="/"> */}
                        <TextForm heading="Enter the text to analyze below" mode={mode} showAlert={showAlert} />
                    {/* </Route>
                </Switch> */}

                {/* <Navbar  />  // if we not use our custorm props then default will be appllied  */}
                {/* <About /> */}
            </>
        // </Router>
    );
}

export default App;