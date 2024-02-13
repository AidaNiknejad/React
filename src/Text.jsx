
import { useEffect , useState  } from "react";

const Text=()=>{
  
  const [ text , setText ] = useState("")
  useEffect(()=>{
    
     console.log("Component did mount" )
  })
  return(
    <div className="App">
      <input onChange={(e)=> setText(e.target.value)}/>
      <h1>{text}</h1>
    </div>
  )
  }
  export default Text