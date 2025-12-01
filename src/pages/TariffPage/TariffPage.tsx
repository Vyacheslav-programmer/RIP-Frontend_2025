import * as React from 'react';
import {useParams} from "react-router-dom";
import {useEffect} from "react";
import {CardImg, Col, Container, Row} from "reactstrap";
import mockImage from "assets/mock.png";
import {T_Tariff} from "modules/types.ts";
import {TariffMocks} from "modules/mocks.ts";

type Props = {
    selectedTariff: T_Tariff | null,
    setSelectedTariff: React.Dispatch<React.SetStateAction<T_Tariff | null>>,
    isMock: boolean,
    setIsMock: React.Dispatch<React.SetStateAction<boolean>>
}

const TariffPage = ({selectedTariff, setSelectedTariff, isMock, setIsMock}: Props) => {
    const { id } = useParams<{id: string}>();

    const fetchData = async () => {
        try {
            const response = await fetch(`http://localhost:8000/api/tariffs/${id}`)
            const data = await response.json()
            setSelectedTariff(data)
        } catch {
            createMock()
        }
    }

    const createMock = () => {
        setIsMock(true)
        setSelectedTariff(TariffMocks.find(tariff => tariff?.id == parseInt(id as string)) as T_Tariff)
    }

    useEffect(() => {
        if (!isMock) {
            void fetchData()
        } else {
            createMock()
        }

        return () => setSelectedTariff(null)
    }, []);

    if (!selectedTariff) {
        return (
            <div>

            </div>
        )
    }

    return (
        <Container>
            <Row>
                <Col md="6">
                    <CardImg src={isMock ? mockImage as string : selectedTariff.image} className="mb-3" />
                </Col>
                <Col md="6">
                    <h1 className="mb-3">{selectedTariff.name}</h1>
                    <p className="fs-5">Описание: {selectedTariff.description}</p>
                    <p className="fs-5">RAM: {selectedTariff.ram} гб</p>
                    <p className="fs-5">CPU: {selectedTariff.cpu}</p>
                    <p className="fs-5">SSD: {selectedTariff.ssd}</p>
                    <p className="fs-5">Цена: {selectedTariff.price} руб./ядро</p>
                </Col>
            </Row>
        </Container>
    );
};

export default TariffPage
