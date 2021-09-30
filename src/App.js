import React from 'react'
import Questions from './Questions.json';
import Display from './Display'
import './App.css';

const App = () => {
  return (
	<div>
	  <h1>Quiz Application</h1>
	  {Questions.map((item,index)=>{
		  return (
               <Display item={item} index={index} />
		  )
	  })}
	</div>
  )
}

export default App
