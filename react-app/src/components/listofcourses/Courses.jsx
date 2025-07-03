import React, { Component } from "react";

export default class Course extends Component {

    state = {currentLikes: this.props.coursedetails.likes};

    incrementLikes = () => {
        //this.props.coursedetails.likes += 1; // props are read-only, so this is not the best practice
        //this.state.currentLikes += 1; // using state to manage likes, but states are immutable in React, so this is not the best practice either
        this.setState({currentLikes: this.state.currentLikes + 1}); // using setState to update the likes
        // setState is the correct way to update state in React
        // this will trigger a re-render of the component with the updated likes
    }
    render() {

        // initial rendering of the component-> mounting phase
        // when onClick is called, it will trigger a re-render of the component with the updated likes
        // virtual DOM will be updated with the new likes count, the difference will be calculated, and the real DOM will be updated with the new likes count
        const { imageUrl, title, rating } = this.props.coursedetails;
        let stars = [];
        for (let i = 0; i < rating; i++) {
        stars.push(
            <i key={i} className="fa-solid fa-star" style={{ color: "gold" }}></i>
        );
        }

        return (
        <div className="col-md-4 my-1">
        <div className="card" style={{ width: "18rem" }}>
            <img
            src={imageUrl}
            alt={title}
            width="200px"
            height="170px"
            className="card-img-top"
            />
            <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{stars}</p>
            <button className="btn btn-primary" onClick = {()=>this.incrementLikes()} >
                {this.state.currentLikes}<i className="fa-solid fa-thumbs-up" style={{marginLeft:"10px"}}></i>
            </button>
            </div>
        </div>
        </div>
        );
    }
}