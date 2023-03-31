import React, { useState } from 'react'

export default function TextForm(props) {
    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText)
        if(text.length === 0){
            props.showAlert("Enter the text please..... !","warning");

        }
        else {
            props.showAlert("Text has been converted into Upper case !","success");
        }
            
    }
    const handleLpClick = () => {
        let newText = text.toLowerCase();
        setText(newText)
        if(text.length === 0){
            props.showAlert("Enter the text please..... !","warning");

        }
        else {
            props.showAlert("Text has been converted into Lower case !","success");
        }

    }

  
    const handleClear = () => {
        setText("");
        if(text.length === 0){
            props.showAlert("Enter the text please..... !","warning");

        }
        else {
            props.showAlert("Text has been cleared !","success");
        }
    }

    const handleCopy = () => {
        navigator.clipboard.writeText(text)
        if(text.length === 0){
            props.showAlert("Enter the text please..... !","warning");

        }
        else {
            props.showAlert("Text has been copied to clipboard !","success");
        }
    }

    const removeExtraSpace = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        if(text.length === 0){
            props.showAlert("Enter the text please..... !","warning");

        }
        else {
            props.showAlert("Extra space has been removed !","success");
        }
    }

    const handleChange = (event) => {
        setText(event.target.value)
    }

    

    const [text, setText] = useState("");


    return (
        <div>
            <div className="container my-2 " style={{color : props.mode==="dark" ? "white" : "black"}}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control border border-primary" value={text} onChange={handleChange} id="myBox" rows="8" placeholder='Enter text here'  style={{backgroundColor : props.mode==="dark" ? "	#404040" : "white" , color: props.mode === "dark" ? "white" : "black"}}></textarea>
                </div>
                <button className="btn btn-primary " onClick={handleUpClick}>Convery to Uppercase</button>
                <button className="btn btn-success mx-3" onClick={handleLpClick}>Convery to Lowercase</button>
                <button className="btn btn-info " onClick={handleCopy}>Copy Text</button>
                <button className="btn btn-secondary mx-3" onClick={removeExtraSpace}>Remove Extra Space</button>
                <button className="btn btn-danger " onClick={handleClear}>Clear Text</button>
            </div>

            <div className="container" style={{color : props.mode==="dark" ? "white" : "black"}}>
                <h2>Your text summary</h2>
                <p>{text.length === 0 ? 0 : text.split(" ").length   } words and {text.length} characters.</p>
                <p>{text.length === 0 ? 0 : 0.005 * text.split(" ").length} Minutes read.</p>
                <h3>Preview</h3>

            </div>
        </div>
    )
}

