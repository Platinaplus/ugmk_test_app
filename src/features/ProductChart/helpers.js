export const options = {
    responsive: true,
    plugins: {
        legend: {
            position: "bottom",
            labels: {
                boxWidth: 15,
                padding: 15,
                generateLabels(chart) {
                    const data = chart.data;
                    if (data.labels.length && data.datasets.length) {
                        return data.datasets.map((dataset, i) => {
                            const meta = chart.getDatasetMeta(0);
                            const style = meta.controller.getStyle(i);

                            return {
                                text: dataset.label,
                                fillStyle: i === 0 ? "#d50000" : "#2962ff",
                                strokeStyle: style.borderColor,
                                fontColor: i === 0 ? "#d50000" : "#2962ff",
                                index: i,
                            };
                        });
                    }
                    return [];
                },
            },
        },
        datalabels: {
            display: null
        }
    },
};
