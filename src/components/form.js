import React, { useState } from 'react';

export default function Form(props) {
  const [text, setText] = useState("");

  const toUppercase = () => {
    if (text !== "") {
      let newText = text.toUpperCase();
      setText(newText);
      props.showAlert("Text converted to uppercase", "success");
    } else {
      props.showAlert("Enter something to convert it to uppercase", "danger");
    }
  };

  const toLowercase = () => {
    if (text !== "") {
      let newText = text.toLowerCase();
      setText(newText);
      props.showAlert("Text converted to lowercase", "success");
    } else {
      props.showAlert("Enter something to convert it to lowercase", "danger");
    }
  };

  const removeExtraSpaces = () => {
    if (text !== "") {
      let result = text.split(/\s+/);
      setText(result.join(" "));
      props.showAlert("Extra spaces were removed", "success");
    } else {
      props.showAlert("Enter something to remove extra spaces", "danger");
    }
  };

  const reset = () => {
    if (text !== "") {
      setText("");
      props.showAlert("Text was reset", "success");
    } else {
      props.showAlert("The textbox is empty", "danger");
    }
  };

  const speak = () => {
    if (text !== "") {
      let msg = new SpeechSynthesisUtterance(text);
      window.speechSynthesis.speak(msg);
    } else {
      props.showAlert("Enter something to speak", "danger");
    }
  };

  const copyToClipboard = () => {
    if (text) {
      navigator.clipboard.writeText(text)
        .then(() => props.showAlert("Text copied to clipboard", "success"))
        .catch(() => props.showAlert("Failed to copy text", "error"));
    } else {
      props.showAlert("Enter something to copy", "danger");
    }
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div className='container' style={{ color: props.mode === "dark" ? "white" : "rgb(4 1 28)" }}>
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea
          className="form-control"
          onChange={handleOnChange}
          value={text}
          style={{
            backgroundColor: props.mode === "dark" ? "grey" : "white",
            color: props.mode === "dark" ? "white" : "rgb(4 1 28)"
          }}
          rows="8"
        ></textarea>
        <button className='btn btn-primary mx-1 my-3' onClick={toUppercase}>Uppercase</button>
        <button className='btn btn-primary mx-1 my-3' onClick={toLowercase}>Lowercase</button>
        <button className='btn btn-primary mx-1 my-3' onClick={reset}>Reset</button>
        <button className='btn btn-primary mx-1 my-3' onClick={removeExtraSpaces}>Remove Extra Space</button>
        <button className='btn btn-primary mx-1 my-3' onClick={speak}>Speak</button>
        <button className='btn btn-primary mx-1 my-3' onClick={copyToClipboard}>Copy to Clipboard</button>
      </div>
      <div style={{ color: props.mode === "dark" ? "white" : "rgb(4 1 28)" }}>
        <h2>Your Text Summary</h2>
        <p>{text.split(/\s+/).filter((word) => word !== "").length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} Minutes Reading Time</p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : "Enter some text in the above textbox to preview it here."}</p>
      </div>
    </div>
  );
}
