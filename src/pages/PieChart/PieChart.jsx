import {
    $productInfo,
    getProductInfo,
    useFactoryMonthProducts,
} from "../../common-entities/productInfo";
import { ArcElement, Chart as ChartJS } from "chart.js";
import React, { useEffect } from "react";
import {
    factoryNames,
    months,
    productsName,
} from "../../common-entities/productInfo/model/constants";

import ChartDataLabels from "chartjs-plugin-datalabels";
import { Loader } from "../../shared/ui/Loader";
import { Pie } from "react-chartjs-2";
import { Typography } from "@mui/material";
import { getProductInfoFx } from "../../common-entities/productInfo";
import { options } from "./helpers";
import s from "./PieChart.module.scss";
import { useParams } from "react-router-dom";
import { useStore } from "effector-react";

ChartJS.register(ArcElement, ChartDataLabels);

export const PieChart = () => {
    const { factoryId, month } = useParams();
    const { isInitialized } = useStore($productInfo);
    const loading = useStore(getProductInfoFx.pending);

    useEffect(() => {
        if (!isInitialized) {
            getProductInfo();
        }
    }, [isInitialized]);

    const factoryData = useFactoryMonthProducts(factoryId, month);

    const data = {
        labels: Object.keys(factoryData).map((key) => productsName[key]),
        datasets: [
            {
                data: Object.values(factoryData),
                backgroundColor: ["#ff6d00", "#2e7d32", "#2979ff"],
                datalabels: {
                    color: ["#ff6d00", "#2e7d32", "#2979ff"],
                },
            },
        ],
    };

    const isData = data?.datasets[0]?.data?.length;

    if (loading) {
        return <Loader />;
    }
    return (
        <>
            <Typography variant='h4' align='center' gutterBottom>
                Статистика по продукции фабрики {factoryNames[factoryId - 1]} за{" "}
                {months[month - 1]}
            </Typography>
            {isData ? (
                <div className={s.wrapper}>
                    <Pie data={data} options={options} />
                </div>
            ) : (
                <Typography align='center' variant='h5'>пока данных нет...</Typography>
            )}
        </>
    );
};
