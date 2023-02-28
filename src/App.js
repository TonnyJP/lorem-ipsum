import React from 'react';
import data from './data';
function App() {
  const [ paragraphNumber, setParagraphNumber ] = React.useState(1)
  const [ content, setContent ] = React.useState([data[0]])

  const handleSubmit =(e) => {
    e.preventDefault();
    if(paragraphNumber <=1){
      setContent([data[0]])
    }else if(paragraphNumber >= data.length){
      setContent([...data])
    }else{
      const newArray = data.slice(0, paragraphNumber)
      setContent([...newArray])
    }
  }
  
  return (
  <div className='main section-center'> 
  <h3>Tired of boring lorem ipsum?</h3>
  <form className='lorem-form' onSubmit={(e) => handleSubmit(e)}>
    <label htmlFor='numberOfPara' className=''>Paragraphs</label>
    <input type="number" value={paragraphNumber} id="numberOfPara" onChange={(e) => setParagraphNumber(e.target.value)}/>
    <button type='submit' className='btn'>generate</button>
  </form>
  <section>
    {content.map((elt, index) => {
      return <div key={index} className="result">{elt}</div>
    })}
  </section>
  </div>
    )
}

export default App;
