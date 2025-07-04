import React from "react";
import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import ListOfCourses from "../listofcourses/listOfCourses";
import CourseDetails from "../listofcourses/courseDetails";
import FMessage from "../functional/message";
import Counter from "../functional/counter";
import Posts from "../posts/posts";
import Header from "../header/header";

const App = () => {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<ListOfCourses />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/coursedetails/:id" element={<CourseDetails />} /> 
        {/* // Dynamic route for course details */}
        <Route path="*" element={<h1>404 Not Found</h1>} />
      </Routes>
    </Router>
    </>
    
  );
};

export default App;