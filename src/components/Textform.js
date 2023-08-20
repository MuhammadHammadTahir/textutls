import React, { useState } from "react";

export default function Textform(props) {
  const handleUpClick = () => {
    let newtext = text.toUpperCase();
    settext(newtext);
    props.showAlert("Converted into Upper Case!", "success");
  };
  const handleLoClick = () => {
    let newtext = text.toLowerCase();
    settext(newtext);
    props.showAlert("Converted into Lower Case!", "success");
  };
  const handleClClick = () => {
    let newtext = "";
    settext(newtext);
    props.showAlert("Text Clear!", "success");
  };
  const handleSpClick = () => {
    let newtext = text.replaceAll(" ", "");
    settext(newtext);
    props.showAlert("All spaces removed!", "success");
  };

  const handleExSpClick = () => {
    console.log("hello");
    let newtext = text.split(/[ ]+/);
    settext(newtext.join(" "));
    props.showAlert("Extra Spaces Removed!", "success");
  };
  const handlecopyClick = () => {
    let text = document.getElementById("mybox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Text copied to Clipboard!", "success");
  };

  const handeleOnChange = (event) => {
    settext(event.target.value);
  };
  const [text, settext] = useState("");
  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "rgb(8 49 90)" }}
      >
        <div className="mb-3">
          <label htmlFor="mybox" className="form-label">
            <h2>Example textarea</h2>
          </label>
          <textarea
            className="form-control"
            value={text}
            onChange={handeleOnChange}
            style={{
              backgroundColor: props.mode === "dark" ? "gray" : "white",
              caretColor: props.mode === "dark" ? "white" : "black",
              cursorColor: "pointer"
            }}
            id="mybox"
            rows="8"
          ></textarea>
        </div>
        <button className="btn btn-primary" onClick={handleClClick}>
          Clear
        </button>
        <button className="btn btn-primary mx-3" onClick={handleUpClick}>
          To Uppercase
        </button>
        <button className="btn btn-primary " onClick={handleLoClick}>
          To Lowercase
        </button>
        <button className="btn btn-primary mx-3" onClick={handleSpClick}>
          Remove Spaces
        </button>
        <button className="btn btn-primary mx-3" onClick={handleExSpClick}>
          Remove Double Spaces
        </button>
        <button className="btn btn-primary mx-3" onClick={handlecopyClick}>
          Copy Text
        </button>
      </div>
      <h3
        className="my-3"
        style={{ color: props.mode === "dark" ? "white" : "rgb(8 49 90)" }}
      >
        Text Summary
      </h3>
      <p style={{ color: props.mode === "dark" ? "white" : "rgb(8 49 90)" }}>
        {text.split(" ").length - 1} Words and {text.length} Characters
      </p>
      <p style={{ color: props.mode === "dark" ? "white" : "rgb(8 49 90)" }}>
        {0.008 * (text.split(" ").length - 1)} minutes to read
      </p>
      <h2 style={{ color: props.mode === "dark" ? "white" : "rgb(8 49 90)" }}>
        Preview
      </h2>
      <p style={{ color: props.mode === "dark" ? "white" : "rgb(8 49 90)" }}>
        {text.length > 0 ? text : "Enter the text to preview"}
      </p>
    </>
  );
}
