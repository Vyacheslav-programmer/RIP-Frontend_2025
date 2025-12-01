import {Breadcrumb, BreadcrumbItem} from "reactstrap";
import {Link, useLocation} from "react-router-dom";
import {T_Tariff} from "modules/types.ts";
import "./styles.css"

type Props = {
    selectedTariff: T_Tariff | null
}

const Breadcrumbs = ({selectedTariff}:Props) => {

    const location = useLocation()

    return (
        <Breadcrumb className="fs-5">
			{location.pathname == "/" &&
				<BreadcrumbItem>
					<Link to="/">
						Главная
					</Link>
				</BreadcrumbItem>
			}
			{location.pathname.includes("/tariffs") &&
                <BreadcrumbItem active>
                    <Link to="/tariffs">
						Тарифы
                    </Link>
                </BreadcrumbItem>
			}
            {selectedTariff &&
                <BreadcrumbItem active>
                    <Link to={location.pathname}>
                        { selectedTariff.name }
                    </Link>
                </BreadcrumbItem>
            }
			<BreadcrumbItem />
        </Breadcrumb>
    );
};

export default Breadcrumbs