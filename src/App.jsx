import { useState } from "react";
import "./App.css";
function App() {
  const [courseList , setCourseList] = useState([]);
  const [newCourse , setNewCourse] = useState("");


  const handelChange=(event)=>{
    setNewCourse(event.target.value);

  };
 const addCourse = ()=>{
const course = {
  id : courseList.length === 0 ? 1 : courseList[courseList.length-1].id + 1 ,
  courseName : newCourse
}

  setCourseList( [...courseList , course]);
   console.log(courseList);
}
  const deleteCourse =(courseName)=>{
    const newCourseList = courseList.filter((course)=>{
      if(course === courseName) return false
      else return true
    })
    setCourseList(newCourseList)
  }
  return (
      <div className="App">
        <div className="add-course">
          <input type="text" onChange={handelChange} />
          <button onClick={addCourse}>Add Course</button>
        </div>
        <div className="list">
          {courseList.map((course)=>{
            return (
            <div>
              <h1>{course.courseName}</h1>
              <button  onClick={() => deleteCourse(course)}>x</button>
            </div>
            )
          })}
        </div>
      </div>
  );
} 
export default App;


