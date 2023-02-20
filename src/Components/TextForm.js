import React, {useState} from 'react'

export default function TextForm(props) {
  const [text, setText] = useState("")

  const handleUpCase =()=>{
    console.log("uppercase is clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Upper Case Enabled", "warning")
  }

  const handleLoCase= ()=>{
    let newText = text.toLowerCase();
    setText(newText)
    props.showAlert("Lower Case Enabled", "warning")
  }

  const handleOnChange = (event)=>{
    console.log("on change")
    setText(event.target.value)
  }

  const handleToReverseCase = ()=>{
    let newText = "";
    for (let i = text.length -1; i >=0 ; i--) {
       newText += text[i]; 
    }
    setText(newText)
    props.showAlert("revers is Enabled", "warning")
  }

  const handleClear=()=>{
    setText(" ")
    props.showAlert("clear all is Enabled", "warning")
  }

  return (
    <>
<div className="mb-3" style={{color: props.mode==='light'?'black':'white'}}>
<h1>{props.heading}</h1>
  <label htmlFor ="myBox" className="form-label"></label>
  <textarea className="form-control" id="myBox" value={text} style={{backgroundColor: props.mode==='light'?'gray':'#dfdfdf',color: props.mode==='dark'?'black':'white'}} onChange={handleOnChange} rows="8"></textarea>
  <button disabled={text.length===0} className='btn btn-primary my-2' onClick={handleUpCase}>Uppercase</button>
  <button disabled={text.length===0} className='btn btn-primary mx-2' onClick={handleLoCase}>Lower Case</button>
  <button disabled={text.length===0} className='btn btn-primary' onClick={handleToReverseCase}>reverse characters</button>
  <button disabled={text.length===0} className='btn btn-primary mx-2' onClick={handleClear}>Clear All</button>
</div>
<div className="container" style={{color: props.mode==='light'?'black':'white'}}>
<h2>Info of above texts</h2>
  <p>{text.length} charachters and {text.split(" ").filter((element)=>{return element.length!==0}).length} words</p>
  <p>It is going to take {0.008 *text.split(" ").length} minuts to read </p>
  <h2>Text preview</h2>
  <p>{text!==''?text:'Write something to see preview'}</p>
</div>
</>
  )
}
