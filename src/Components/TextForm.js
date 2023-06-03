import React, {useState} from 'react'

// console.log(('enter text here'));

export default function TextForm(props) {
  //is this function  is for button event fire
  const handleUpClick = ()=>{
    console.log("uppercase was clicked" + text);
    let newText= text.toUpperCase();
    setText(newText);
    // showAlert("converted to uppercase","success");
  }

  const handleLoClick = ()=>{
    // console.log("lowercase was clicked" + text);
    let newText= text.toLowerCase();
    // text.concat();
    setText(newText);
    // props.showAlert("converted to lowercase","success");

  }

  const handleClClick = ()=>{
    // console.log("lowercase was clicked" + text);
    let newText= '';
    // text.concat();
    setText(newText);
  }


  // const handleConClick = ()=>{
  //   // console.log("lowercase was clicked" + text);
  //   let newText= text.concat();
  //   // text.concat();
  //   setText(newText);
  // }
  

  //its is for txtarea change 
  const handleOnChange= (event)=>{
    console.log("on change");
    setText(event.target.value);
  }
  const handleCopy = () =>{
    console.log("i am copy");
    var text = document.getElementById("myBox");
    text.select();
    // text.setSectionRange(0, 9999);
    navigator.clipboard.writeText(text.value);
  //  props.showAlert("copy mode has been enabled","success");


  }
    const[text, setText] = useState('');//correct way or syntax for update state
   // text ="new state";//wrong way to update state
  // setText("here");//correct way to change state of element

  return (
    <>
    <div className="container" style={{Color: props.mode==='dark'?'white':'black'}}>
     
     <h1>{props.heading} </h1>
      <div className="mb-3">
           
            <textarea className="form-control" value={text} onChange= {handleOnChange} style={{backgroundColor: props.mode==='dark'?'grey':'white', color: props.mode==='dark'?'white':'black'}} id="myBox" rows="6"></textarea>
       </div>
       <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
       <button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to LOWcase</button>
       <button className="btn btn-primary mx-1" onClick={handleClClick}>Clear Text</button>
        <button className="btn btn-primary mx-1" onClick={handleCopy}>Copy Text</button>



    </div>
    <div className="container my-3" style={{Color: props.mode==='dark'?'grey':'white'}}>
      <h2>you text summary</h2>
     
      <p>{text.split(" ").length} words and  {text.length}characters</p>
      <p>{0.08 * text.split(" ").length} Minutes read</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:"enter something to preview"}</p>
      {/* <h2>Index of text</h2> */}
      {/* <p>{text.indexOf()}</p> */}

    </div>
    </>
  )
}
