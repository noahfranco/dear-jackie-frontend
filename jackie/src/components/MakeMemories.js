import React from "react"; 
import {Jumbotron, Button} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Link } from "react-router-dom";
import "../makeMemories.css"

class MakeMemories extends React.Component {

    render() {
        return(
            <>
                <Jumbotron className="b-color"> 
                    <h3 className="title"> Will you be my girlfriend? </h3>
                    <div style={{marginTop: "20px"}}>

                    <div className="wrap-button1"> 
                    <Link to="/shesaidyes"> 
                    <Button variant="primary" className="yes-button"> Yes </Button>
                    </Link> 
                    </div> 
                    <div style={{padding: "70px"}} className="wrap-button1"> 
                    <Button variant="primary" className="no-button"> No </Button> 
                    </div> 
                    </div>
                </Jumbotron>
            </>
        )
    }
}

export default MakeMemories; 