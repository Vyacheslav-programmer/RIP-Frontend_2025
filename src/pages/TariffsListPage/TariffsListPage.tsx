import {Button, Col, Container, Form, Input, Row} from "reactstrap";
import TariffCard from "components/TariffCard/TariffCard.tsx";
import {ChangeEvent, FormEvent, useEffect} from "react";
import * as React from "react";
import {useAppSelector} from "src/store/store.ts";
import {updateTariffName} from "src/store/slices/tariffsSlice.ts";
import {T_Tariff} from "modules/types.ts";
import {TariffMocks} from "modules/mocks.ts";
import {useDispatch} from "react-redux";
import "./styles.css"
import Cart from "components/Cart/Cart.tsx";

type Props = {
    tariffs: T_Tariff[],
    setTariffs: React.Dispatch<React.SetStateAction<T_Tariff[]>>
    isMock: boolean,
    setIsMock: React.Dispatch<React.SetStateAction<boolean>>
}

const TariffsListPage = ({tariffs, setTariffs, isMock, setIsMock}:Props) => {

    const dispatch = useDispatch()

    const {tariff_name} = useAppSelector((state) => state.tariffs)

    const handleChange = (e:ChangeEvent<HTMLInputElement>) => {
        dispatch(updateTariffName(e.target.value))
    }

    const createMocks = () => {
        setIsMock(true)
        setTariffs(TariffMocks.filter(tariff => tariff.name.toLowerCase().includes(tariff_name.toLowerCase())))
    }

    const handleSubmit = async (e:FormEvent) => {
        e.preventDefault()
        await fetchTariffs()
    }

    const fetchTariffs = async () => {
        try {
            const response = await fetch(`http://localhost:8000/api/tariffs/?tariff_name=${tariff_name.toLowerCase()}`)
            const data = await response.json()
            setTariffs(data)
            setIsMock(false)
        } catch {
            createMocks()
        }
    }

    const fetchCartData = async () => {
        try {
            await fetch(`http://localhost:8000/api/forecastCloudPrices/cart/`)
        } catch {
            createMocks()
        }
    }

    useEffect(() => {
        void fetchTariffs()
        void fetchCartData()
        return setTariffs([])
    }, []);

    return (
        <Container>
            <Row className="mb-5">
                <Col md="6">
                    <Form onSubmit={handleSubmit}>
                        <Row>
                            <Col xs="8">
                                <Input value={tariff_name} onChange={handleChange} placeholder="Поиск..."></Input>
                            </Col>
                            <Col>
                                <Button color="primary" className="w-100 search-btn">Поиск</Button>
                            </Col>
                        </Row>
                    </Form>
                </Col>
                <Col className="d-flex flex-row justify-content-end" md="6">
                    <Cart />
                </Col>
            </Row>
            <Row>
                {tariffs?.map(tariff => (
                    <Col key={tariff.id} sm="12" md="6" lg="4">
                        <TariffCard tariff={tariff} isMock={isMock} />
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default TariffsListPage
