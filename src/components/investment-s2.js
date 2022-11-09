import React,{Component} from "react";
import Container from "../../node_modules/react-bootstrap/Container";
import Row from "../../node_modules/react-bootstrap/Row";
import Col from "../../node_modules/react-bootstrap/Col";
import Button from "../../node_modules/react-bootstrap/Button";

class InvestmentS2 extends Component{
    render(){
        return(    
            <Container fluid className="investment-s2 d-flex minh-33vh bg-light align-items-center py-5 border-top border-warning">
            <Row className="mx-0 w-100 mt-5">
                <Col xs={{span:12,order:1}} md={{span:8,order:2}} className="minh-25vh"></Col>
                <Col xs={{span:12,order:2}} md={{span:4,order:1}} className="minh-25vh d-flex align-items-center">
                    <div className="w-100 text-center text-md-left">
                        <h5 className="text-white-50">
                            Our 
                        </h5>
                        <h2 className="dispaly-6 fw-bold text-warning">
                            Standards
                        </h2>
                        <p className="text-white">
                            Our company has taken great care to establish itself as a leader in the multifamily 
                            real estate market. Committed to the success of all of its stake holders, the firm 
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

export default InvestmentS2;