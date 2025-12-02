import Header from "components/Header/Header.tsx";
import Breadcrumbs from "components/Breadcrumbs/Breadcrumbs.tsx";
import TariffPage from "pages/TariffPage/TariffPage.tsx";
import TariffsListPage from "pages/TariffsListPage/TariffsListPage.tsx";
import {Route, Routes} from "react-router-dom";
import {Container, Row} from "reactstrap";
import HomePage from "pages/HomePage/HomePage.tsx";
import {useState} from "react";
import {T_Tariff} from "modules/types.ts";

function App() {

    const [tariffs, setTariffs] = useState<T_Tariff[]>([])

    const [selectedTariff, setSelectedTariff] = useState<T_Tariff | null>(null)

    const [isMock, setIsMock] = useState(false);

    return (
        <>
            <Header/>
            <Container className="pt-4">
                <Row className="mb-3">
                    <Breadcrumbs selectedTariff={selectedTariff}/>
                </Row>
                <Row>
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/tariffs/" element={<TariffsListPage tariffs={tariffs} setTariffs={setTariffs} isMock={isMock} setIsMock={setIsMock} />} />
                        <Route path="/tariffs/:id" element={<TariffPage selectedTariff={selectedTariff} setSelectedTariff={setSelectedTariff} isMock={isMock} setIsMock={setIsMock} />} />
                    </Routes>
                </Row>
            </Container>
        </>
    )
}

export default App
