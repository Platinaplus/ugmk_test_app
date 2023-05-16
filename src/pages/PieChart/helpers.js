export const options = {
    responsive: true,
    layout: {
        padding: 50,
    },
    plugins: {
        legend: {
            position: "bottom",
            labels: {
                boxWidth: 15,
                padding: 15,
                generateLabels(chart) {
                    const data = chart.data;
                    if (data.labels.length && data.datasets.length) {
                        return data.labels.map((label, i) => {
                            const meta = chart.getDatasetMeta(0);
                            const style = meta.controller.getStyle(i);

                            return {
                                text: label,
                                fillStyle: data.datasets[0].backgroundColor[i],
                                strokeStyle: style.borderColor,
                                fontColor: data.datasets[0].backgroundColor[i],
                                index: i,
                            };
                        });
                    }
                    return [];
                },
            },
        },
        datalabels: {
            labels: {
                title: {
                    font: {
                        weight: 'bold',
                        size: 20
                      }
                },
            },
            anchor: 'end',
            align: 'end'
        },
    },
};
