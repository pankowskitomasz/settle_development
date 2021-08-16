import React,{Component} from "react";
import ContactTop from "../components/contact_top";

class Contact extends Component{
    render(){
        return(
            <main className="bg-contact minh-footer-adj bg-dark">
                <ContactTop/>
            </main>
        );
    }
}
export default Contact;