import React,{Component} from "react";
import Container from "../../node_modules/react-bootstrap/Container";
import Row from "../../node_modules/react-bootstrap/Row";
import Col from "../../node_modules/react-bootstrap/Col";
import Button from "../../node_modules/react-bootstrap/Button";

class GalleryS1 extends Component{
    render(){
        return(    
            <Container fluid className="investment-s2 d-flex minh-50vh align-items-center py-5 border-top border-secondary pt-5">
            <Row className="mx-0 w-100 mt-5">
                <Col xs={{span:12,order:1}} md={{span:7,order:2}} className="minh-25vh"></Col>
                <Col xs={{span:12,order:2}} md={{span:5,order:1}} className="minh-50vh d-flex align-items-center">
                    <div className="w-100 text-center text-md-left">
                        <h2 className="dispaly-6 fw-bold text-warning text-shadow">
                            Standards and values
                        </h2>
                        <p className="text-white">
                            Committed to the success of all of its stake holders, the firm 
                            upholds a set of high standards and values. Integrity, creativity, reliability and 
                            attention to detail have been, and will continue to be, the keys to the company’s 
                            successes.
                        </p>
                    </div>
                </Col>
            </Row>
        </Container>
        );
    }
}

export default GalleryS1;