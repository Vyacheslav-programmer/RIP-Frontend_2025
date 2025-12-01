import {Button, Col, Container, Form, Input, Row} from "reactstrap";
import React, {ChangeEvent, useEffect} from "react";
import {useAppDispatch, useAppSelector} from "store/store.ts";
import {fetchTariffs, updateTariffName} from "store/slices/tariffsSlice.ts";
import TariffCard from "components/TariffCard/TariffCard.tsx";
import Cart from "components/Cart/Cart.tsx";
import {fetchCartData} from "store/slices/forecastsSlice.ts";

const TariffsListPage = () => {

    const dispatch = useAppDispatch()

    const {tariffs, tariff_name} = useAppSelector((state) => state.tariffs)

    const {is_authenticated} = useAppSelector((state) => state.user)

    const {draft_forecast_id, tariffs_count} = useAppSelector((state) => state.forecasts)

    const hasDraft = draft_forecast_id !== 0

    const handleChange = (e:ChangeEvent<HTMLInputElement>) => {
        dispatch(updateTariffName(e.target.value))
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        dispatch(fetchTariffs())
    }

    useEffect(() => {
        dispatch(fetchTariffs())
        if (is_authenticated) {
            dispatch(fetchCartData())
        }
    }, [])

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
                {is_authenticated &&
                    <Col className="d-flex flex-row justify-content-end" md="6">
                        <Cart isActive={hasDraft} draft_forecast_id={draft_forecast_id} tariffs_count={tariffs_count} />
                    </Col>
                }
            </Row>
            <Row className="mt-5 d-flex">
                {tariffs?.map(tariff => (
                    <Col key={tariff.id} className="mb-5 d-flex justify-content-center" sm="12" md="6" lg="4">
                        <TariffCard tariff={tariff} showAddBtn={is_authenticated} />
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default TariffsListPage
