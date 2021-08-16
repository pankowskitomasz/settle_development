import React,{Component} from "react";
import OfferList from "../components/offer_list";

class Offer extends Component{
    render(){
        return(
            <main className="bg-offer minh-footer-adj bg-dark">
                <OfferList/>
            </main>
        );
    }
}
export default Offer;