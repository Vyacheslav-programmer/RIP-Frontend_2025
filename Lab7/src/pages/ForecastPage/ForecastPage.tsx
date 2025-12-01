import {useNavigate, useParams} from "react-router-dom";
import React, {useEffect, useState} from "react";
import {useAppDispatch, useAppSelector} from "store/store.ts";
import {
    deleteDraftForecast,
    fetchForecast,
    removeForecast,
    sendDraftForecast,
    updateForecast
} from "store/slices/forecastsSlice.ts";
import {Button, Col, Form, Row} from "reactstrap";
import TariffCard from "components/TariffCard/TariffCard.tsx";
import CustomInput from "components/CustomInput/CustomInput.tsx";
import {E_ForecastStatus} from "modules/types.ts";
import {TariffItem} from "src/api/Api.ts";

const ForecastPage = () => {
    const { id } = useParams<{id: string}>();

    const dispatch = useAppDispatch()

    const navigate = useNavigate()

    const {is_authenticated} = useAppSelector((state) => state.user)

    const forecast = useAppSelector((state) => state.forecasts.forecast)

    const [days, setDays] = useState(forecast?.days)

    const [calcfield, setCalcfield] = useState(forecast?.price)

    const [saveMM, setSaveMM] = useState<boolean>(false)

    useEffect(() => {
        if (!is_authenticated) {
            navigate("/")
        }
    }, [is_authenticated]);

    useEffect(() => {
        if (id && is_authenticated) {
            dispatch(fetchForecast(id))
        }
        return () => {
            dispatch(removeForecast())
        }
    }, []);

    useEffect(() => {
        setDays(forecast?.days)
        setCalcfield(forecast?.price)
    }, [forecast]);

    const sendForecast = async (e:React.FormEvent) => {
        e.preventDefault()

        await saveForecast()

        await dispatch(sendDraftForecast())

        navigate("/forecasts/")
    }

    const saveForecast = async (e?:React.MouseEvent<HTMLButtonElement>) => {
        console.log("saveForecast")
        e?.preventDefault()

        const data = {
            days
        }

        await dispatch(updateForecast(data))
        setSaveMM(value => !value)
    }

    const deleteForecast = async () => {
        await dispatch(deleteDraftForecast())
        navigate("/tariffs/")
    }

    if (!forecast) {
        return (
            <div>

            </div>
        )
    }

    const isDraft = forecast.status == E_ForecastStatus.Draft
    const isCompleted = forecast.status == E_ForecastStatus.Completed

    return (
        <Form onSubmit={sendForecast} className="pb-5">
            <h2 className="mb-5">{isDraft ? "Черновой прогноз" : `Прогноз №${id}` }</h2>
            <Row className="mb-5 fs-5 w-25">
                <CustomInput label="Кол-во дней" placeholder="Введите кол-во дней" value={days || 0} setValue={setDays} disabled={!isDraft}/>
                {isCompleted && <CustomInput label="Вычисляемое поле" value={calcfield || 0} disabled={true}/>}
            </Row>
            <Row>
                {forecast.tariffs && forecast.tariffs.length > 0 ? forecast.tariffs.map((tariff:TariffItem) => (
                    <Row key={tariff.id} className="d-flex justify-content-center mb-5">
                        <TariffCard tariff={tariff} showRemoveBtn={isDraft} editMM={isDraft} saveMM={saveMM} />
                    </Row>
                )) :
                    <h3 className="text-center">Тарифы не добавлены</h3>
                }
            </Row>
            {isDraft &&
                <Row className="mt-5">
                    <Col className="d-flex gap-5 justify-content-center">
                        <Button color="success" className="fs-4" onClick={saveForecast}>Сохранить</Button>
                        <Button color="primary" className="fs-4" type="submit">Отправить</Button>
                        <Button color="danger" className="fs-4" onClick={deleteForecast}>Удалить</Button>
                    </Col>
                </Row>
            }
        </Form>
    );
};

export default ForecastPage
