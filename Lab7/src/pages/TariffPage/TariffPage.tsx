import {useParams} from "react-router-dom";
import {useEffect} from "react";
import {Col, Container, Row} from "reactstrap";
import {useAppDispatch, useAppSelector} from "store/store.ts";
import {fetchTariff, removeSelectedTariff} from "store/slices/tariffsSlice.ts";

const TariffPage = () => {
    const { id } = useParams<{id: string}>();

    const dispatch = useAppDispatch()

    const {tariff} = useAppSelector((state) => state.tariffs)

    useEffect(() => {
        id && dispatch(fetchTariff(id))
        return () => {
            dispatch(removeSelectedTariff())
        }
    }, []);

    if (!tariff) {
        return (
            <div>

            </div>
        )
    }

    return (
        <Container>
            <Row>
                <Col md="6">
                    <img
                        alt=""
                        src={tariff.image}
                        className="w-100"
                    />
                </Col>
                <Col md="6">
                    <h1 className="mb-3">{tariff.name}</h1>
                    <p className="fs-5">Описание: {tariff.description}</p>
                    <p className="fs-5">RAM: {tariff.ram} гб</p>
                    <p className="fs-5">CPU: {tariff.cpu}</p>
                    <p className="fs-5">SSD: {tariff.ssd}</p>
                    <p className="fs-5">Цена: {tariff.price} руб./ядро</p>
                </Col>
            </Row>
        </Container>
    );
};

export default TariffPage
