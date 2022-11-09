import React,{Component} from "react";
import Container from "../../node_modules/react-bootstrap/Container";
import Row from "../../node_modules/react-bootstrap/Row";
import Col from "../../node_modules/react-bootstrap/Col";

class InvestmentS3 extends Component{
    render(){
        return( 
            <Container fluid className="investment-s3 d-flex minh-33vh align-items-center py-3 border-top border-warning">
                <Row className="mx-0 w-100 text-shadow">
                    <Col xs={12} md={4} className="text-left p-4">
                        <h3 className="text-warning font-weight-bold">
                            Investment
                        </h3>
                        <p className="text-warning">
                            If the investment opportunity qualifies, resources are 
                            pooled from investors and lending institutions while bright talent is engaged 
                            to design and execute plans.
                        </p>
                    </Col>
                    <Col xs={12} md={4} className="text-left p-4">
                        <h3 className="text-warning font-weight-bold">
                            Commitment
                        </h3>
                        <p className="text-warning">
                            Committed to the success of all of its stake holders, the firm 
                            upholds a set of high standards and values. Integrity, creativity, reliability and 
                            attention to detail
                        </p>
                    </Col>
                    <Col xs={12} md={4} className="text-left p-4">
                        <h3 className="text-warning font-weight-bold">
                            Innovation
                        </h3>
                        <p className="text-warning">
                            The company uses its competitive advantage to produce 
                            a desirable product through unique design concepts and architectural innovation.      
                        </p>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default InvestmentS3;