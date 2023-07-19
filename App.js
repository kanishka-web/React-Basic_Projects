import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  const [inputText,setInputText] = useState("")
  const [listItems,setListItems] = useState([])
 
  const changingTextArea=(event)=>{
    
    console.log(event.target.value)
    setInputText(event.target.value)
  }

  const printingListItems=()=>{
     setListItems((oldItems)=>{
      return [...oldItems,inputText]
     })
     setInputText("")
}
const deleteItems=(index)=>{
  setListItems((oldItems) => {
    const updatedItems = [...oldItems];
    updatedItems.splice(index, 1);
    return updatedItems;
  });
}

  return (
<div className='main-container'>
  <h1 className='underline-heading'><i>TO-DO LIST</i></h1>
<div className='child-container'>
<div className='input-div'>
  <input type='text' placeholder='Add Items' onChange={changingTextArea} value={inputText} style={{backgroundColor:'transparent',border:'none',width:'240px'}}/>
  <button type="button" className="btn btn-success button-style" style={{borderRadius:'50%'}} onClick={printingListItems}> <span style={{fontSize:'18px'}}>+</span> </button>
  <ul className="list-item" style={{color:"black",maxHeight:'410px',maxWidth:"280px"}}>
    {
      listItems.map((eachItem,index)=>{
        return <div key={index} className='list-item-row'><li style={{overflow:'auto'}}>{eachItem}</li>
          <button className='btn btn-danger button-style'  onClick={() => deleteItems(index)} style={{borderRadius:'50%',marginLeft:'10px'}}>X</button>
        </div>
      })
    }
</ul>
</div>
</div>
</div>
  )
}

export default App;
