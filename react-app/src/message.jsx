import React from 'react'

const Message = ({course}) => {
  return (
    <div key={course.id} className="course">
        <h2>{course.title}</h2>
        <p>Rating: {course.rating}</p>
        <p>Price: {course.price}</p>
        <p>Likes: {course.likes}</p>  
      </div>
  )
}

export default Message