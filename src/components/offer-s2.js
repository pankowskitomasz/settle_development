import React,{Component} from "react";
import Container from "../../node_modules/react-bootstrap/Container";
import Row from "../../node_modules/react-bootstrap/Row";
import Col from "../../node_modules/react-bootstrap/Col";
import Table from "../../node_modules/react-bootstrap/Table";

class OfferS2 extends Component{
    render(){
        return(    
            <Container fluid className="offer-s2 d-flex minh-33vh bg-white align-items-center py-5 border-top  border-bottom border-warning">
                <Row className="mx-0 w-100">
                    <Col xs={12} md={7} className="mx-auto minh-25vh d-flex align-items-center">
                        <div className="w-100 text-center">
                            <h2 className="dispaly-6 fw-bold text-warning">
                                Our offer
                            </h2>
                            <p className="text-white">
                                Our company has taken great care to establish itself as a leader in the multifamily 
                                real estate market. Committed to the success of all of its stake holders, the firm 
                                upholds a set of high standards and values. Integrity, creativity, reliability and 
                                attention to detail have been, and will continue to be, the keys to the company’s 
                                successes.
                            </p>
                            <Table hover striped>
                                <thead>
                                    <tr className="text-white">
                                        <th className="w-25">Name</th>
                                        <th className="w-50">Description</th>
                                        <th className="w-25">Price</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                </tbody>
                            </Table>
                        </div>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default OfferS2;