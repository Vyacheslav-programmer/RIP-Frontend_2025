import {Button, Card, CardBody, CardText, CardTitle, Col, Row} from "reactstrap";
import {Link, useLocation} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "store/store.ts";
import {useEffect, useState} from "react";
import CustomInput from "components/CustomInput/CustomInput.tsx";
import {addTariffToForecast} from "store/slices/tariffsSlice.ts";
import {fetchCartData, removeTariffFromDraftForecast, updateTariffValue} from "store/slices/forecastsSlice.ts";
import {TariffItem} from "src/api/Api.ts";

type Props = {
    tariff: TariffItem,
    showAddBtn?: boolean,
    showRemoveBtn?: boolean,
    editMM?: boolean,
    saveMM?: boolean,
}

const TariffCard = ({tariff,  showAddBtn=false, showRemoveBtn=false, editMM=false, saveMM}:Props) => {

    const dispatch = useAppDispatch()

    const {is_superuser=false} = useAppSelector((state) => state.user)

    const [local_mmfield, setLocal_mmfield] = useState(tariff.count)
    
    const location = useLocation()

    const isForecastPage = location.pathname.includes("forecasts")

    const handeAddToDraftForecast = async () => {
        if (tariff) {
            await dispatch(addTariffToForecast(tariff.id))
            await dispatch(fetchCartData())
        }
    }

    const handleRemoveFromDraftForecast = async () => {
        await dispatch(removeTariffFromDraftForecast(tariff.id))
    }

    useEffect(() => {
        if (saveMM != null) {
            void updateValue()
        }
    }, [saveMM]);

    const updateValue = async () => {
        if (local_mmfield) {
            dispatch(updateTariffValue({
                tariff_id: tariff.id,
                count: local_mmfield
            }))
        }
    }

    if (isForecastPage) {
        return (
            <Card key={tariff.id}>
                <Row>
                    <Col>
                        <img
                            alt=""
                            src={tariff.image}
                            style={{"width": "100%"}}
                        />
                    </Col>
                    <Col md={8}>
                        <CardBody>
                            <CardTitle tag="h5">
                                {tariff.name}
                            </CardTitle>
                            <CardText>
                                Цена: {tariff.price} руб.
                            </CardText>
                            <CustomInput label="Количество" type="number" value={local_mmfield || 0} setValue={setLocal_mmfield} disabled={!editMM || is_superuser} className={"w-25"}/>
                            <Col className="d-flex gap-5">
                                <Link to={`/tariffs/${tariff.id}`}>
                                    <Button color="primary" type="button">
                                        Открыть
                                    </Button>
                                </Link>
                                {showRemoveBtn &&
                                    <Button color="danger" onClick={handleRemoveFromDraftForecast}>
                                        Удалить
                                    </Button>
                                }
                            </Col>
                        </CardBody>
                    </Col>
                </Row>
            </Card>
        );
    }

    return (
        <Card key={tariff.id} style={{width: '18rem' }}>
            <img
                alt=""
                src={tariff.image}
                style={{"height": "200px"}}
            />
            <CardBody>
                <CardTitle tag="h5">
                    {tariff.name}
                </CardTitle>
                <CardText>
                    Цена: {tariff.price} руб.
                </CardText>
                <Col className="d-flex justify-content-between">
                    <Link to={`/tariffs/${tariff.id}`}>
                        <Button color="primary" type="button">
                            Открыть
                        </Button>
                    </Link>
                    {showAddBtn &&
                        <Button color="secondary" onClick={handeAddToDraftForecast}>
                            Добавить
                        </Button>
                    }
                </Col>
            </CardBody>
        </Card>
    );
};

export default TariffCard
