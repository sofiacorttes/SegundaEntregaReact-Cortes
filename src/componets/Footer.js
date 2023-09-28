import facebook from "./img/facebook.svg"
import whatsapp from "./img/whatsapp.svg"
import instagram from "./img/instagram.svg"
import { Link } from "react-router-dom";

const Footer = () => {
    return(
        <div className="container-fluid text-danger">
            <div className="conteiner">
                <div className="row">
                    <div className="col-md-2">
                        <h5>Tiendas</h5>
                    </div>
                    <div className="col-md-2">
                        <h5>Nuestras sucursales</h5>
                    </div>
                    <div className="col-md-2">
                        <h5>Encontranos</h5>
                    </div>
                    <div className="col-md-6 text-end">
                        <Link to="https://es-la.facebook.com/"><img src={facebook} alt="facebook" width={34} className="m-3" /></Link>
                        <Link to="https://www.whatsapp.com/?lang=es"><img src={whatsapp} alt="whatsapp" width={34} className="m-3"/></Link>
                        <Link to="https://www.instagram.com/"><img src={instagram} alt="instagram" width={34} className="m-3"/></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer; 