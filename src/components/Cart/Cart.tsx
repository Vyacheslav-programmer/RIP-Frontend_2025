import {Button} from "reactstrap";
import { FaCartShopping } from "react-icons/fa6";

const Cart = () => {
    return <Button color={"secondary"} className="bin-wrapper" disabled><FaCartShopping /></Button>
}

export default Cart
