import { useEffect, useState } from "react"; 

const ItemDetail = ({producto}) => {
    const [item, setItem] = useState({});

    useEffect(() => {
        setItem(producto);
    }, [producto]);

    return(
        <div className="container my-5">
            <div className="row">
                <div className="col-md-4 offset-md-2">
                <img src = {item.img} alt= {item.nombreProducto} className="img-fluid" />
                </div>
                <div className="col-md-4">
                    <h1>{item.nombreProducto}</h1>
                    <h3>${item.precio}</h3>
                    <p>{item.descripcion}</p>
                </div>
            </div>
        </div>
    )
}

export default ItemDetail