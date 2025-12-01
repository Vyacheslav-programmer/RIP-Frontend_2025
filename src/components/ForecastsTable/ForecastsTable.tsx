import {useNavigate} from "react-router-dom";
import {useMemo} from "react";
import {formatDate} from "src/utils/utils.ts";
import CustomTable from "components/CustomTable/CustomTable.tsx";
import {Forecasts} from "src/api/Api.ts";

const ForecastsTable = ({forecasts}:{forecasts:Forecasts[]}) => {
    const navigate = useNavigate()

    const handleClick = (forecast_id:number) => {
        navigate(`/forecasts/${forecast_id}`)
    }

    const STATUSES:Record<number, string> = {
        1: "Введен",
        2: "В работе",
        3: "Завершен",
        4: "Отменён",
        5: "Удалён"
    }

    const columns = useMemo(
        () => [
            {
                Header: '№',
                accessor: 'id',
            },
            {
                Header: 'Статус',
                accessor: 'status',
                Cell: ({ value }: {value:string}) => STATUSES[value as unknown as number]
            },
            // {
            //     Header: 'Вычисляемое поле',
            //     accessor: 'calcfield',
            //     Cell: ({ value }) => value
            // },
            {
                Header: 'Дата создания',
                accessor: 'date_created',
                Cell: ({ value }) => formatDate(value)
            },
            {
                Header: 'Дата формирования',
                accessor: 'date_formation',
                Cell: ({ value }) => formatDate(value)
            },
            {
                Header: 'Дата завершения',
                accessor: 'date_complete',
                Cell: ({ value }) => formatDate(value)
            }
        ],
        []
    )

    return (
        <CustomTable columns={columns} data={forecasts} onClick={handleClick}/>
    )
};

export default ForecastsTable
