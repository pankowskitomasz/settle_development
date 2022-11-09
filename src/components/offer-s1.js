import React,{Component} from "react";
import Container from "../../node_modules/react-bootstrap/Container";
import Row from "../../node_modules/react-bootstrap/Row";
import Col from "../../node_modules/react-bootstrap/Col";

class OfferS1 extends Component{
    render(){
        return(    
            <Container fluid className="offer-s1 d-flex minh-33vh align-items-center py-5">
                <Row className="mx-0 w-100 mt-5">
                    <Col xs={12} md={8} className="minh-25vh d-none d-md-block"></Col>
                    <Col xs={12} md={4} className="minh-25vh d-flex align-items-center">
                        <div className="w-100 text-center text-md-left pt-5 text-shadow">
                            <h2 className="dispaly-6 fw-bold text-warning text-shadow">
                                A family company         
                            </h2>
                            <p className="text-white">
                                We are family company specialised in mixed-use real estate investment, development, 
                                and management company focused on high quality, infill and suburban real estate in 
                                country. 
                            </p>
                        </div>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default OfferS1;