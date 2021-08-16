import React,{Component} from "react";
import {Link} from "react-router-dom";
import Nav from "../../node_modules/react-bootstrap/Nav";
import Navbar from "../../node_modules/react-bootstrap/Navbar";

class Navigation extends Component{
    render(){
        let menuContent = this.props.menuItems.filter((item)=>item.navItem).map((item,idx)=>{
            if(idx<2 || idx>5) return <Nav.Item key={idx}>
                <Link to={item.path} className="nav-link font-weight-bold text-white">
                    {item.name}
                </Link>
            </Nav.Item>;
        });
        return(
            <Navbar bg="transparent" variant="light" expand="md" className="position-absolute px-2 w-100" collapseOnSelect>
                <Navbar.Brand>
                    <Link to="/">
                        <img src="img/navbar_logo.png" alt="logo" className="me-2"/>                        
                    </Link>
                </Navbar.Brand>
                <Navbar.Toggle className="border-light"/>
                <Navbar.Collapse>
                    <Nav className="ml-auto text-right px-3 text-shadow">
                        {menuContent}
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default Navigation;