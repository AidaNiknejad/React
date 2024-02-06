import { useState } from "react";
import "./App.css"
function App() {
  const [courseList , setCourseList] = useState([]);

  const [newCourse , setNewCourse] = useState("");
  
  const handelChange =(event)=>{

    setNewCourse(event.target.value);

  }

  const addCourse =()=>{
    setCourseList([...courseList , newCourse])
    console.log(courseList)
  }
  const deleteCourse =(courseName) =>{
  const newCourseList = courseList.filter((course)=>{courseName !== course
  })
  setCourseList(newCourseList);
  };
    
  return (
      <div className="App">
        <div className="add-course">
          <input type="text" onChange={handelChange}  placeholder="Enter course name"> </input>   
          <button onClick={addCourse}>Add Course</button>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     
        </div>
        {newCourse}
        <div className="list"></div>
        { courseList.map ((course , index) =>{
        return (<div key={index}>
        <h1> {course} </h1>
        <button  onClick={()=> deleteCourse(course)}>x</button>
        </div>
        )
        })}
      </div>
  );
} 
export default App;


