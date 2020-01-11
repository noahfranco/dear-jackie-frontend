import React from "react"; 
import {Jumbotron, Button} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Link } from "react-router-dom";

class MakeMemories extends React.Component {

    render() {
        return(
            <>
                <Jumbotron style={{background: "white"}}> 
                    <h3> Will you be my girlfirend? </h3>
                    <div style={{marginTop: "20px"}}>

                    <div style={{padding: "10px"}}> 
                    <Link to="/shesaidyes"> 
                    <Button variant="primary" style={{fontSize: "70px"}}> Yes </Button>
                    </Link> 
                    </div> 
                    <div style={{padding: "70px"}}> 
                    <Button variant="primary"> No </Button> 
                    </div> 
                    </div>
                </Jumbotron>
            </>
        )
    }
}

export default MakeMemories; 