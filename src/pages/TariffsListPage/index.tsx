import {Button, Col, Container, Form, Input, Row} from "reactstrap";
import {T_Tariff} from "src/modules/types.ts";
import TariffCard from "components/TariffCard";
import Cart from "components/Cart/Cart.tsx";
import {TariffMocks} from "src/modules/mocks.ts";
import {FormEvent, useEffect, useState} from "react";
import "./styles.css"

const TariffsListPage = () => {
    const [tariffs, setTariffs] = useState<T_Tariff[]>([])
    const [tariffName, setTariffName] = useState<string>("")
    const [isMock, setIsMock] = useState(false);

    const fetchTariffsData = async () => {
        try {
            const response = await fetch(`/api/tariffs/?tariff_name=${tariffName.toLowerCase()}`)
            const data = await response.json()
            setTariffs(data)
            setIsMock(false)
        } catch {
            createMocks()
        }
    }

    const fetchCartData = async () => {
        try {
            await fetch(`/api/forecasts/cart/`)
        } catch {
            createMocks()
        }
    }

    const createMocks = () => {
        setIsMock(true)
        setTariffs(TariffMocks.filter(tariff => tariff.name.toLowerCase().includes(tariffName.toLowerCase())))
    }

    const handleSubmit = async (e:FormEvent) => {
        e.preventDefault()
        if (isMock) {
            createMocks()
        } else {
            await fetchTariffsData()
        }
    }

    useEffect(() => {
        void fetchTariffsData()
        void fetchCartData()
    }, []);

    return (
        <Container>
            <Row className="mb-5">
                <Col md="6">
                    <Form onSubmit={handleSubmit}>
                        <Row>
                            <Col md="8">
                                <Input value={tariffName} onChange={(e) => setTariffName(e.target.value)} placeholder="Поиск..."></Input>
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
                    <Col key={tariff.id} xs="4">
                        <TariffCard tariff={tariff} isMock={isMock} />
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default TariffsListPage
