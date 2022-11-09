import React,{Component} from "react";
import {Link} from "react-router-dom";
import Container from "../../node_modules/react-bootstrap/Container";
import Row from "../../node_modules/react-bootstrap/Row";
import Col from "../../node_modules/react-bootstrap/Col";

class Footer extends Component{
    render(){
        return(
            <footer>
                <Container fluid className="d-flex text-dark align-items-center bg-warning text-dark pt-3 opacity-9 border-top border-dark">
                    <Row className="mx-0 w-100 small opacity-9">
                        <Col xs={12} md={6} lg={5} className="text-center text-md-left">
                            <img src="img/navbar_logo.png" fluid alt="logo"/>
                            <p className="initialism font-weight-normal text-dark my-3">
                                Established in 1990, we built upon expertise and experience 
                                in development and construction as well as an intimate knowledge 
                                of the markets in which it operates.
                            </p>
                        </Col>
                        <Col xs={12} md={6} lg={7} className="text-center text-md-right">                    
                            <ul className="list-inline">
                                <li className="list-inline-item">
                                    <Link to="#">
                                        <span className="fa fa-facebook text-dark"></span>
                                    </Link>
                                </li>
                                <li className="list-inline-item">
                                    <Link to="#">
                                        <span className="fa fa-instagram text-dark"></span>
                                    </Link>
                                </li>
                                <li className="list-inline-item">
                                    <Link to="#">
                                        <span className="fa fa-twitter text-dark"></span>
                                    </Link>
                                </li>
                            </ul>       
                        </Col>
                        <Col xs={12} className="text-center border-top border-dark">
                            <p className="mb-1 text-dark">
                                Copyright &copy; 2021-2022 Tomasz Pankowski. 
                                <Link to="/privacy" className="font-weight-bold text-dark text-decoration-none">
                                     Privacy policy
                                </Link>
                            </p>
                        </Col>
                    </Row>
                </Container>
            </footer>
        );
    }
}

export default Footer;  