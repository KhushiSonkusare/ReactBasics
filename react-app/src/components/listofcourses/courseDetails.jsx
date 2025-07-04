import React from 'react'
import { useParams } from 'react-router-dom';

export default function CourseDetails() {
  const {id} = useParams(); // useParams is used to get the dynamic parameter from the URL
  // You can use this id to fetch course details from an API or state management
  return (
    <div>
      This is course details page {id}
    </div>
  )
}
