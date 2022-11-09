import React,{Component} from "react";
import Container from "../../node_modules/react-bootstrap/Container";
import Row from "../../node_modules/react-bootstrap/Row";
import Col from "../../node_modules/react-bootstrap/Col";

class InvestmentS1 extends Component{
    render(){
        return(    
            <Container fluid className="investment-s1 d-flex bg-secondary minh-33vh align-items-center py-5">
                <Row className="mx-0 w-100 mt-5">
                    <Col xs={12} md={8} className="minh-25vh d-none d-md-block"></Col>
                    <Col xs={12} md={4} className="minh-25vh d-flex align-items-center">
                        <div className="w-100 text-center text-md-left pt-5 text-shadow">
                            <h5 className="text-white-50">
                                A Long Term
                            </h5>
                            <h2 className="dispaly-6 fw-bold text-warning text-shadow">
                                Approach     
                            </h2>
                            <p className="text-white">
                                We are constantly evaluating opportunities in the market, using independent and 
                                conservative judgment. If the investment opportunity qualifies, resources are 
                                pooled from investors and lending institutions while bright talent is engaged 
                                to design and execute plans. The company uses its competitive advantage to produce 
                                a desirable product through unique design concepts and architectural innovation.      
                            </p>
                        </div>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default InvestmentS1;