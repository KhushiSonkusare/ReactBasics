import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Rating from './rating'; 

export default function CourseDetails() {
  const { id } = useParams(); // useParams is used to get the dynamic parameter from the URL
  // You can use this id to fetch course details from an API or state management

  const [courseDetails, setDetails] = useState({likes:1000});
  useEffect(() => {
    fetch(`http://localhost:3000/courses/${id}`) // Fetching course details based on the id from the URL
    .then(response => response.json())
    .then(data => setDetails(data))
  },[]);
  
    const handleLike = () => {
    setDetails(prevDetails => ({
      ...prevDetails,
      likes: prevDetails.likes + 1
    }));
  };


  return (
    <>
      <div className="container my-9">
        <div className="row">
          <div className="col-md-6">
            <img src={courseDetails.imageUrl} className="img-fluid" />
          </div>
          <div className="col-md-6">
            <h2>{courseDetails.title}</h2>
            <p>Rating: {<Rating rating = {courseDetails.rating}/>}</p>
            <p>Price: ${courseDetails.price}</p>
            <p>Likes: {courseDetails.likes}</p>
            <button className="btn btn-primary" onClick={handleLike}>
              Like <i className="fa-solid fa-thumbs-up" style={{ marginLeft: "10px" }}></i>
            </button>
          </div>
        </div>
      </div>  
    </>
  )
}
