import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Message from './message'
import courses from './listOfCourses'


function App() {

  console.log(courses);
  

  return(
    <>
    {courses.map((i) => (
      <Message course = {i} key = {i.id} />
    ))}
    </>
  ) 
}

export default App
