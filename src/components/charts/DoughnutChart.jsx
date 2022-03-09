import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import tableData from '../data/tableData.json';
import './DoughnutChart.css';
import { useTranslation } from 'react-i18next';

ChartJS.register(ArcElement, Tooltip, Legend);

const DoughnutChart = () => {
	const { t } = useTranslation();
	const data = {
		labels: [
			197234,
			197596,
			292122,
			243059,
			243544,
			243009,
			243345,
			t('total'),
		],

		datasets: [
			{
				label: 'ΠΕΛΑΤΗΣ',

				data: tableData['ΣΥΝΟΛΟ 2016']
					.slice(1)
					.map((value) => value['ΑΞΙΑ ΑΕΡΙΟΥ (€)'], '€'),
				backgroundColor: [
					'rgba(255, 99, 132, 0.2)',
					'rgba(122, 23, 111, 0.2)',
					'rgba(23, 24, 132, 0.2)',
					'rgba(54, 162, 235, 0.2)',
					'rgba(255, 206, 86, 0.2)',
					'rgba(75, 192, 192, 0.2)',
					'rgba(153, 102, 255, 0.2)',
					'rgba(255, 159, 64, 0.2)',
				],
				borderColor: [
					'rgba(255, 99, 132, 0.2)',
					'rgba(122, 23, 111, 0.2)',
					'rgba(23, 24, 132, 0.2)',
					'rgba(54, 162, 235, 0.2)',
					'rgba(255, 206, 86, 0.2)',
					'rgba(75, 192, 192, 0.2)',
					'rgba(153, 102, 255, 0.2)',
					'rgba(255, 159, 64, 0.2)',
				],
				borderWidth: 1,
			},
		],
	};

	const options = {
		plugins: {
			legend: {
				position: 'right',

				labels: {
					font: {
						size: 10,
					},
				},
			},
			title: {
				display: true,
				text: t('doughnutChart_title'),
			},
		},
	};

	return (
		<div className="doughnutChart-container">
			<div className="doughnutChart">
				<Doughnut data={data} options={options} />
			</div>
		</div>
	);
};

export default DoughnutChart;
