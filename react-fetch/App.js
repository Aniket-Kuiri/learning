import './App.css';
import React, { useState, useEffect } from 'react';

function App() {
  // eslint-disable-next-line
  const [ques, setQues] = useState()

  useEffect(() => {
    let controller = new AbortController()
    const fetchOperation = async () => {
        const response = await fetch("http://localhost:5000/python", controller.signal)
        const data = await response.json()
        console.log(data)
        setQues(data)
    }
    fetchOperation()
    return () => 
    {
      console.log("Aborting fetch call")
      controller.abort()
      console.log("fetch aborted")
    }
  }, [])
  
  if (ques)
  {
    const q = ques.ques[0]
    console.log(q)
  }

  return (
    <React.Fragment>
       {!ques && (<h1>Loading.....</h1>)}
       {ques && (<h1>Ques.... </h1>)}
    </React.Fragment>
  );

  /*if(ques)
  {
    return (<h1>{ques}</h1>)
  }
  else
  {
    return (<h1>Loading</h1>)
  }*/

}

export default App;
