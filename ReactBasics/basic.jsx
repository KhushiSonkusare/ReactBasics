// creating a simple jsx element in React
const JSX = <h1>Hello, World!</h1>; // this is a JSX element, which is a syntax extension for JavaScript that looks similar to HTML

ReactDom.render(JSX, document.getElementById('root')); // this renders the JSX element to the DOM, specifically to the element with id 'root'

// define class to html element -> use className instead of class
// define inline styles -> use style={{}} instead of style=""

// every element is a self-closing tag, so you can use <img />, <br />, <hr />, etc.

class Basic extends React.Component{ // this is a class component, stateful and lifecycle methods can be used
    constructor(props){ // this can track changes in state
        super(props);

    }

    render(){
        return (
            <div>
                <h1>Welcome to React Basics</h1>
                <p>This is a simple React component.</p>
            </div>
        );
    }
}

// rendering a class component (multiple components can be rendered in a single file)
ReactDom.render(<>
    <Basic />
    <BasicComponent />
</>, document.getElementById('root')); 



const BasicComponent = function(){ // this is a functional component, stateless and no lifecycle methods
    // You can use hooks like useState and useEffect in functional components
    //stateless means no state management, cannot track changes in state
    // this doesnt know about the context of 'this', so it cannot use 'this' keyword
    return (
        <div>
            <h1>Welcome to React Basics</h1>
            <p>This is a simple React component.</p>
        </div>
    );
}

const App = () => { // This is a functional component, stateless and no lifecycle methods
    // but this is arrow function syntax, which is a more modern way to write functional components
    // it knows about the context of 'this' and does not require binding
    return (
        <div>
            <Basic />
            <BasicComponent />
        </div>
    );
}

// nesting components
ReactDom.render(<App />, document.getElementById('root')); // this renders the App component to the DOM, specifically to the element with id 'root'

// nesting 

const NestedComponent = () => {
    return (
        <div>
            <h2>This is a nested component</h2>
            <p>It can contain other components or HTML elements.</p>
        </div>
    );
}

class ParentComponent extends React.Component {
    render() {
        return (
            <div>
                <h1>This is the Parent Component</h1>
                <NestedComponent />
            </div>
        );
    }
}
