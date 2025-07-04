import React from 'react'

export default function Rating(props) {
    let stars = [];
        for (let i = 0; i < props.rating; i++) {
            stars.push(
            <i key={i} className="fa-solid fa-star" style={{ color: "gold" }}></i>
            );
        }
  return (
    <i>
        {stars}
    </i>
  )
}
