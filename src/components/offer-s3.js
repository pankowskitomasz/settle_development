import React,{Component} from "react";
import Container from "../../node_modules/react-bootstrap/Container";
import Row from "../../node_modules/react-bootstrap/Row";
import Col from "../../node_modules/react-bootstrap/Col";
import Table from "../../node_modules/react-bootstrap/Table";

class OfferS3 extends Component{
    render(){
        return(    
            <Container fluid className="offer-s3 d-flex minh-33vh align-items-center py-5 bg-secondary">
                <Row className="mx-0 w-100 px-3 text-shadow">
                    <Col xs={12} className="py-3">
                        <h2 className="display-6 text-center text-md-left text-warning text-uppercase">
                            FAQ
                        </h2>
                    </Col>
                    <Col xs={12} md={3} className="mx-auto text-center text-md-left">
                        <p className="initialism text-warning">
                            If the investment opportunity qualifies, resources are 
                            pooled from investors and lending institutions while bright talent is engaged 
                            to design and execute plans.
                        </p>
                    </Col>
                    <Col md={1} className="d-none d-md-block mx-auto">
                        <div class=" border-left mx-auto h-100 w-25"></div>
                    </Col>
                    <Col xs={12} md={3} className="text-center text-md-left">
                        <p className="initialism text-warning">
                            Committed to the success of all of its stake holders, the firm 
                            upholds a set of high standards and values. Integrity, creativity, reliability and 
                            attention to detail
                        </p>
                    </Col>
                    <Col md={1} className="d-none d-md-block mx-auto">
                        <div class=" border-left mx-auto h-100 w-25"></div>
                    </Col>
                    <Col xs={12} md={3} className="mx-auto text-center text-md-left">
                        <p className="initialism text-warning">
                            The company uses its competitive advantage to produce 
                            a desirable product through unique design concepts and architectural innovation.
                        </p>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default OfferS3;