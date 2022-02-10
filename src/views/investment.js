import React,{Component} from "react";
import Container from "../../node_modules/react-bootstrap/Container";
import InvestmentS1 from "../components/investment-s1";
import InvestmentS2 from "../components/investment-s2";
import InvestmentS3 from "../components/investment-s3";

class Investment extends Component{
    render(){
        return(        
            <Container fluid className="minh-footer-adj p-0">
                <InvestmentS1/>
                <InvestmentS2/>
                <InvestmentS3/>
            </Container>    
        );
    }
}

export default Investment;