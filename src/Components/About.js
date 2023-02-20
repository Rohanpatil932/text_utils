import React, {useState} from 'react'

export default function About(props) {
    // const [myStyle, setStyle]= useState({
    //     color:'black',
    //     backgroundColor:'white'
    // })
    // const [btnText, setBtnText] = useState("Activate Dark Mode")

    // const handleDarkToggle = ()=>{
    //     if(myStyle.color==='white'){
    //         setStyle({
    //             color:'black',
    //             backgroundColor:'white'
    //         })
    //         setBtnText("Activate Dark Mode")
    //     }else{
    //         setStyle({
    //             color:'white',
    //             backgroundColor:'black'
    //         })
    //         setBtnText("Activate Light Mode")
    //     }
    // }

  let myStyle= {
    color: props.mode ==='dark'?'white':'black',
    backgroundColor:props.mode==='dark'?'#9b9b9b':'white'
  }

  return (
    <div className='container'>
      <div className="card" style= {myStyle}>
  <div className="card-body"  >
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
  <div className="card">
  <ul className="list-group list-group-flush">
    <li className="list-group-item" style= {myStyle}>An item</li>
    <li className="list-group-item" style= {myStyle}>A second item</li>
    <li className="list-group-item" style= {myStyle}>A third item</li>
  </ul>
  </div>
  </div>
  {/* <div className="container">
    <button className='btn btn-primary my-3' type="button" style= {myStyle} onClick={handleDarkToggle}>{btnText}</button>
  </div> */}
    </div>
  )
}
