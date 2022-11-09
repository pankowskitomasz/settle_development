import React,{Component} from "react";
import Container from "../../node_modules/react-bootstrap/Container";
import Row from "../../node_modules/react-bootstrap/Row";
import Col from "../../node_modules/react-bootstrap/Col";
import Button from "../../node_modules/react-bootstrap/Button";
import {Link} from "react-router-dom";

class HomeTop extends Component{
    render(){
        let linking;
        if(this.props.backLink!==undefined){
            linking = <Link to={this.props.backLink.path}>
                <Button variant="warning" className="rounded-pill">
                    {this.props.backLink.name}
                </Button>
            </Link>;
        }
        return(
            <Container fluid className="minh-footer-adj d-flex align-items-center py-5">
                <Row className="mx-0 w-100 mt-5">
                    <Col sm={6} md={7} className="d-none d-sm-block"></Col>
                    <Col xs={10} sm={6} md={5} className="text-center text-sm-left text-uppercase text-white mx-auto">
                        <h4 className="lead font-weight-bold">
                            Do you need
                        </h4>  
                        <h2 className="h1 font-weight-bold">
                            new Home?
                        </h2>
                        <h5 className="initialism text-warning font-weight-bold">
                           We make your dreams come true! 
                        </h5>
                        <p class="text-white small">
                            We are family company specialised in mixed-use real estate investment, development, 
                            and management company focused on high quality, infill and suburban real estate in 
                            country. Established in 1990, we built upon expertise and experience in development 
                            and construction as well as an intimate knowledge of the markets in which it operates.
                        </p>
                        {linking}
                    </Col>
                </Row>
            </Container>
        );
    }
}
export default HomeTop;