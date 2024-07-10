
import React from "react";
import './../styles/App.css';
import Tooltip from "./Tooltip";

const App = () => {
  const text={
    first:'This is a tooltip',
    second:'This is another tooltip'
  }
  const children={
    first:'Hover over me',
    second:'Hover over me to see another tooltip'
  }
  return (
    <div>
    
      <Tooltip text={text} children={children} />
        {/* Do not remove the main div */}
    </div>
  )
}

export default App
