// props 
// passing props to functional components

const PropsComponent = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>  // use curly braces to embed JavaScript expressions
            <p>{props.description}</p>
        </div>
    );
}

class PropsClassComponent extends React.Component {
    render(){
        return(
            <PropsComponent title="Welcome to React Props" description="This is a simple component demonstrating props." />
        )
    }
}

// map function syntax and explanation
arr = [1, 2, 3, 4, 5];
const mappedArray = arr.map((item, index)=>{
    return item *2 ;
})


class PrintCourses extends React.Component {
   render(){
    return(
        <div>
            <h1>Courses List</h1>
            <ul>
                {this.props.courses.map((course, index) =>
                    <li key = {index}>{course.name}</li>)}
            </ul>
        </div>
    )
   }
}
// pass an array as props
const courses = ["React Basics", "Advanced React", "React Hooks"];
class ArrayPropsComponent extends React.Component {
    render(){
        return (
        <PrintCourses courses={courses} /> // use curly braces to pass JavaScript expressions as props, for arrays or objects even integers
        )
    }
}

// default props
const DefaultPropsComponent = ({title = "Default Title", description = "Default Description"}) => {
    return (
        <div>
            <h1>{title}</h1>
            <p>{description}</p>
        </div>
    );
}

// alternative syntax for default props in class components
DefaultPropsComponent.defaultProps = {
    title: "Default Title",
    description: "Default Description"
};

