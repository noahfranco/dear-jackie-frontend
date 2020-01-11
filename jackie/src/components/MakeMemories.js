import React from "react"; 
import {Jumbotron, Button} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

    

class MakeMemories extends React.Component {

    render() {
        return(
            <>
                <Jumbotron style={{background: "white"}}> 
                    <h3> Will you be my girlfirend? </h3>
                    <div style={{marginTop: "20px"}}>

                    <div style={{padding: "10px"}}> 
                    <Button variant="primary" style={{fontSize: "70px"}}> Yes </Button>
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