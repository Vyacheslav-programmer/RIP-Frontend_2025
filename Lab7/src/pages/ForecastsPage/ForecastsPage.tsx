import {FormEvent, useEffect, useState} from "react";
import {useAppDispatch, useAppSelector} from "store/store.ts";
import {
    fetchForecasts,
    updateFilters
} from "store/slices/forecastsSlice.ts";
import {Button, Col, Container, Form, Input, Row} from "reactstrap";
import CustomDropdown from "components/CustomDropdown/CustomDropdown.tsx";
import {T_ForecastsFilters} from "modules/types.ts";
import ForecastsTable from "components/ForecastsTable/ForecastsTable.tsx";
import {useNavigate} from "react-router-dom";

const ForecastsPage = () => {

    const dispatch = useAppDispatch()

    const navigate = useNavigate()

    const forecasts = useAppSelector((state) => state.forecasts.forecasts)

    const filters = useAppSelector<T_ForecastsFilters>((state) => state.forecasts.filters)

    const {is_authenticated} = useAppSelector((state) => state.user)

    const [status, setStatus] = useState(filters.status)

    const [dateFormationStart, setDateFormationStart] = useState(filters.date_formation_start)

    const [dateFormationEnd, setDateFormationEnd] = useState(filters.date_formation_end)

    const statusOptions = {
        0: "Любой",
        2: "В работе",
        3: "Завершен",
        4: "Отклонен"
    }

    useEffect(() => {
        if (!is_authenticated) {
            navigate("/")
        }
    }, [is_authenticated]);

    useEffect(() => {
        dispatch(fetchForecasts())
    }, [filters]);

    const applyFilters = async (e: FormEvent) => {
        e.preventDefault()

        const filters:T_ForecastsFilters = {
            status: status,
            date_formation_start: dateFormationStart,
            date_formation_end: dateFormationEnd
        }

        dispatch(updateFilters(filters))
    }

    return (
        <Container>
            <Form onSubmit={applyFilters}>
                <Row className="mb-4 d-flex align-items-center">
                    <Col md="2" className="d-flex flex-row gap-3 align-items-center">
                        <label>От</label>
                        <Input type="date" value={dateFormationStart} onChange={(e) => setDateFormationStart(e.target.value)} required/>
                    </Col>
                    <Col md="2" className="d-flex flex-row gap-3 align-items-center">
                        <label>До</label>
                        <Input type="date" value={dateFormationEnd} onChange={(e) => setDateFormationEnd(e.target.value)} required/>
                    </Col>
                    <Col md="3">
                        <CustomDropdown label="Статус" selectedItem={status} setSelectedItem={setStatus} options={statusOptions} />
                    </Col>
                    <Col className="d-flex justify-content-end">
                        <Button color="primary" type="submit">Применить</Button>
                    </Col>
                </Row>
            </Form>
            {forecasts.length ? <ForecastsTable forecasts={forecasts}/> : <h3 className="text-center mt-5">Прогнозы не найдены</h3>}
        </Container>
    )
};

export default ForecastsPage
