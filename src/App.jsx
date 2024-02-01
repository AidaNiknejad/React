import './App.css'

function App() {
  return (
    <div>
     <User name="Aida" age={21} email="aida.nknjd@gmail.com"/>
     <User />
     <User />
    </div>
  )
}

const GetName = () => {
  return "Aida"
}
//props 
// const props = {
//   name : "Aida",
//   age : 21,
//   email : "aida.nknjd@gmail.com"

// }



//component 
const User = (props) =>{
  return (
    <div>
  <h1>{props.name}</h1>
  <h2>{props.age}</h2>
  <h2>{props.email}</h2>
  </div>
  )
}

export default App
