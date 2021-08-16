import React,{Component} from "react";
import HomeTop from "../components/home_top";

class Home extends Component{
    render(){
        return(
            <main className="bg-home minh-footer-adj bg-dark">
                <HomeTop backLink={this.props.backLink}/>
            </main>
        );
    }
}
export default Home;