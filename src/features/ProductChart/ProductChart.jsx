import { Bar, getDatasetAtEvent, getElementAtEvent } from "react-chartjs-2";
import {
    BarElement,
    CategoryScale,
    Chart as ChartJS,
    Legend,
    LinearScale,
    Title,
    Tooltip,
} from "chart.js";
import React, { useRef } from "react";

import { labels } from "./constants";
import { options } from './helpers'
import s from "./ProductChart.module.scss";
import { useNavigate } from "react-router-dom";

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

export const ProductChart = ({ products, product }) => {
    const chartRef = useRef(null);
    const navigate = useNavigate();

    const data = {
        labels,
        datasets: [
            {
                label: "Фабрика А",
                data: labels.map((_, index) => {
                    const current = products[index]["factory1"];
                    if (product && product !== 0) {
                        return current[`product${product}`];
                    }
                    return Object.keys(current).reduce(
                        (acc, item) => acc + current[item],
                        0
                    );
                }),
                backgroundColor: "#d50000",
            },
            {
                label: "Фабрика Б",
                data: labels.map((_, index) => {
                    const current = products[index]["factory2"];
                    if (product && product !== 0) {
                        return current[`product${product}`];
                    }
                    return Object.keys(current).reduce(
                        (acc, item) => acc + current[item],
                        0
                    );
                }),
                backgroundColor: "#2962ff",
            },
        ],
    };

    const getMonth = (element) => {
        if (!element.length) return;

        const { index } = element[0];

        return index + 1;
    };
    const getFactoryId = (dataset) => {
        if (!dataset.length) return;

        const datasetIndex = dataset[0].datasetIndex;

        return datasetIndex + 1;
    };

    const onClick = (event) => {
        const { current: chart } = chartRef;

        if (!chart) {
            return;
        }
        const month = getMonth(getElementAtEvent(chart, event));
        const factory = getFactoryId(getDatasetAtEvent(chart, event));
        if (factory && month) {
            navigate(`/${factory}/${month}`);
        }
    };

    return (
        <div className={s.chartBox}>
            <Bar
                options={options}
                data={data}
                ref={chartRef}
                onClick={onClick}
            />
        </div>
    );
};
