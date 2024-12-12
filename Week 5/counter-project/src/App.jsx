/*

import { useState } from 'react'      // use this hook to define your state
import './App.css'

function App() {      // here App is a component
  const [count, setCount] = useState(0)     // u have to define the state in this way so that react is watching this and knows when to change the DOM
  // count is a state variable and  setCount is a funtion that it gave

  function onClickHandler(){
    setCount(count+1);
  }

  return (

      <div>
        <button onClick={onClickHandler}> Counter {count} </button>    // whenever u want to render any dynamic javascript variable inside a react component, u have to put it inside curly brackets
      </div>      
    
  )
}

export default App

*/






// *** Another cleaner way to do this

import { useState } from 'react'    // use this hook to define your state
import './App.css'

function App() {    // here App is a component
  const [count, setCount] = useState(0)   // defining the initial state, u have to define the state in this way so that react is watching this and knows when to change the DOM
  // count is a state variable and  setCount is a funtion

  return (    // returning dynamic html(xml)

      <div>
        <CustomButton count={count} setCount={setCount}></CustomButton>    // whenever u want to render any dynamic javascript variable inside a react component, u have to put it inside curly brackets
        // now i can reuse this component
      </div>      
    
  )
}

// component - better way is creating the components outside
function CustomButton(props){   // takes some state or props as an input

  function onClickHandler(){
    props.setCount(props.count + 1);
  }

  return <button onClick={onClickHandler}>      // this is the way to define the function on click in curly brackets unline the html (just give the function name, don't call it ()  )
    counter {props.count}
  </button>

}

export default App




// JSX Syntax Differentiation:

// Capitalized Names: React treats anything with a capitalized first letter as a custom component. For example, <CustomButton /> will be treated as a component that you’ve defined.
// Lowercase Names: React treats anything with a lowercase first letter as an HTML element. For example, <div> or <button> will be treated as standard HTML elements.

// npm run build-->coverts react code to html css js