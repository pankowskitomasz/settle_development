import {Redirect} from "react-router-dom";
import Apartments from "./views/apartments";
import Comingsoon from "./views/comingsoon";
import Contact from "./views/contact";
import Error from "./views/error";
import Financing from "./views/financing";
import Gallery from "./views/gallery";
import Home from "./views/home";
import Investment from "./views/investment";
import Location from "./views/location";
import Offer from "./views/offer";
import PrivacyPolicy from "./views/privacy";
import Quality from "./views/quality";

const appCfg = {
    routes:[
        {navItem:true, exact:true, path:"/",name:"Home",view:<Home backLink={{name:"See more",path:"/investment"}}/>},
        {navItem:true, exact:true, path:"/investment",name:"Investment",view:<Investment/>},
        {navItem:true, exact:true, path:"/investment/apartments",name:"Apartments",view:<Apartments/>},
        {navItem:true, exact:true, path:"/investment/financing",name:"Financing",view:<Financing/>},
        {navItem:true, exact:true, path:"/investment/location",name:"Location",view:<Location/>},
        {navItem:true, exact:true, path:"/investment/quality",name:"Quality",view:<Quality/>},
        {navItem:true, exact:true, path:"/offer",name:"Offer",view:<Offer/>},
        {navItem:true, exact:true, path:"/gallery",name:"Gallery",view:<Gallery/>},
        {navItem:true, exact:true, path:"/contact",name:"Contact",view:<Contact/>},
        {navItem:false, exact:false, path:"/comingsoon",name:"Comingsoon",view:<Comingsoon/>},                
        {navItem:false, exact:false, path:"/error",name:"Error",view:<Error backLink={{name:"back to Home",href:"/"}}/>},
        {navItem:false, exact:false, path:"/privacy",name:"Privacy",view: <PrivacyPolicy backLink={{name:"back to Home",href:"/"}}/>},                
        {navItem:false, exact:false, path:"/investment*",name:"any",view: <Redirect to="/investment"/>},
        {navItem:false, exact:false, path:"*",name:"any",view:<Redirect to="/error"/>}
    ]
};
const homeCfg = [
    {navItem:true, exact:true, path:"/",name:"Home",view:<Home/>},
];

export {
    appCfg,
    homeCfg
}