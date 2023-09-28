import cart from "./img/cart-fill.svg"

const CartWidget = () => {
    return(
        <button type="button" className="btn btn-secondary position-relative m-3">
            <img src={cart} alt="Cart" width={30}/>
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">1</span>
        </button>
    )
}

export default CartWidget; 