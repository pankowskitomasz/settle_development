import React,{Component} from "react";
import Container from "../../node_modules/react-bootstrap/Container";
import Row from "../../node_modules/react-bootstrap/Row";
import Col from "../../node_modules/react-bootstrap/Col";

class ContactTop extends Component{
    render(){
        return(
            <Container fluid className="minh-footer-adj d-flex align-items-center">
                <Row className="mx-0 w-100">
                    <Col sm={6} md={7} className="d-none d-sm-block"></Col>
                    <Col xs={10} sm={6} md={5} className="text-center text-sm-left text-uppercase text-white mx-auto pt-5">
                        <h4 className="lead font-weight-bold">
                            Do you have
                        </h4>  
                        <h2 className="h1 font-weight-bold">
                            Questions?
                        </h2>
                        <h5 className="initialism text-warning font-weight-bold">
                           Contact us now! 
                        </h5>
                        <p class="text-white lead">
                            We welcome you to contact us with any inquiries regarding our services, 
                            capabilities or investment opportunities. 
                        </p>
                        <address className="pt-3 initialism text-warning">
                            00-001 City,<br/> 
                            Street 12A,<br/>
                            678 142 838<br/>
                            contact&#64;mail.it
                        </address>
                    </Col>
                </Row>
            </Container>
        );
    }
}
export default ContactTop;