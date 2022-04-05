import React,{useState} from 'react'
import Questions from './Questions.json';
import Model from './Model'
import Display from './Display'
import './App.css';

const App = () => {
	let tempMarks = []
	const [marks,setMarks] = useState([])
	const changeHandler = (value,index) =>{
		tempMarks = marks;
		tempMarks[index] = value;
       setMarks([...tempMarks]);
	}
  return (
	<div>
	  <h1>Go to Page</h1>
	  <h1>Quiz Application</h1>
	  
	  {Questions.map((item,index)=>{
		  return (
               <Display item={item} index={index} onChange={changeHandler} />
		  )
	  })}
	  <button onClick={()=> alert(marks.reduce((a,b) => a+b,0))}>Submit</button>
	</div>
  )
}

export default App
