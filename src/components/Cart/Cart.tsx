import {Link} from "react-router-dom";
import {Badge, Button} from "reactstrap";
import { FaCartShopping } from "react-icons/fa6";

type Props = {
    isActive: boolean,
    draft_forecast_id: number,
    tariffs_count: number
}

const Cart = ({isActive, draft_forecast_id, tariffs_count}:Props) => {
    if (!isActive) {
        return <Button color={"secondary"} className="bin-wrapper bin" disabled>
            <FaCartShopping />
            Корзина
        </Button>
    }

    return (
        <Link to={`/forecasts/${draft_forecast_id}/`} className="bin-wrapper">
            <Button color={"primary"} className="w-100 bin">
                <FaCartShopping />
                Корзина
                <Badge>
                    {tariffs_count}
                </Badge>
            </Button>
        </Link>
    )
}

export default Cart
