import React from 'react'

const Display = ({item,index,changeHandler}) => {
    const handler = e=>{
        let temp = item.answer === e.target.value ? 1 : 0;
        changeHandler(temp);
    }
  return (
    <div className="app">
    <div className="card">
        <div className="card-body">
      <h2>{item.title}</h2>
      <div onChane={handler}>
          <input type="radio"  value="A" name={index}/> {item.options[0]} &nbsp;
          
          <input type="radio"  value="B" name={index} /> {item.options[1]} &nbsp;
          
          <input type="radio"  value="C" name={index}/> {item.options[2]} &nbsp;
          
          <input type="radio"  value="D" name={index}/> {item.options[3]} &nbsp;

          
      </div>

      </div>

    </div>

    </div>
  )
}

export default Display
