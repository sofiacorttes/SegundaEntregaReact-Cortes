import CartWidget from "./CartWidget";
import Navbar from "./NavBar";
import Logo from "./img/logo.png";
import { Link } from "react-router-dom";

const Header = () => {
    return(
        <div className="container-fluid">
            <div className="row bg-danger p-2"> 
                <div className="col-md-6">
                    <Link to= {"/"}><img src={Logo} alt={"Logo Make Up"} width={55} /></Link>
                </div>
                <div className="col-md-6 text-end p-3">
                    <h6>El mejor Maquillaje lo encontras aca!</h6>
                </div>
            </div>
            <div className="row p-2"> 
                <div className="col-md-6 text-start">
                    <Navbar></Navbar>
                </div>
                <div className="col-md-6 text-end">
                    <CartWidget></CartWidget>
                </div>
            </div>
        </div>
    )
}

export default Header; 