import { Link } from "react-router-dom";

const Homepage = () => {
    return (
        <>
            <div className="question">
                You are building a web app in React.  
                <br />
                Do you: 
            </div>
            <Link className="answer" to="/import-component">
                A) Import a new element as a component
            </Link>
            <Link className="answer" to="/write-html">
                B) Write a new element as HTML
            </Link>
        </>
    ); 
}; 

export default Homepage; 