import style from "./App.module.css"

function App() {
  const age= 20;
  if(age > 20) console.log("over age")
  else console.log("under age")

  age > 20 ? console.loge("over age") : console.log("under age")
  return (
    <div className="App">
      AidaNiknejad
    </div>
  )
}
export default App;
