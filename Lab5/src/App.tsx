import {useState} from "react";
import Header from "components/Header";
import Breadcrumbs from "components/Breadcrumbs";
import TariffPage from "pages/TariffPage";
import TariffsListPage from "pages/TariffsListPage";
import {Route, Routes} from "react-router-dom";
import {T_Tariff} from "src/modules/types.ts";
import {Container, Row} from "reactstrap";
import HomePage from "pages/HomePage";
import "./styles.css"

function App() {

    const [selectedTariff, setSelectedTariff] = useState<T_Tariff | null>(null)

    return (
        <div>
            <Header/>
            <Container className="pt-4">
                <Row className="mb-3">
                    <Breadcrumbs selectedTariff={selectedTariff} />
                </Row>
                <Row>
                    <Routes>
						<Route path="/" element={<HomePage />} />
                        <Route path="/tariffs/" element={<TariffsListPage />} />
                        <Route path="/tariffs/:id" element={<TariffPage selectedTariff={selectedTariff} setSelectedTariff={setSelectedTariff} />} />
                    </Routes>
                </Row>
            </Container>
        </div>
    )
}

export default App
