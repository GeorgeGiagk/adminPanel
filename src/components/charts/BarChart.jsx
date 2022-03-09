import React from 'react';
import { Chart } from 'react-chartjs-2';
import {
	BarElement,
	CategoryScale,
	Chart as ChartJS,
	LinearScale,
	PointElement,
	LineElement,
	Legend,
	Tooltip,
	Title,
} from 'chart.js';
import tableData from '../data/tableData.json';
import './BarChart.css';
import { useTranslation } from 'react-i18next';

ChartJS.register(
	CategoryScale,
	LinearScale,
	BarElement,
	PointElement,
	LineElement,
	Legend,
	Tooltip,
	Title
);

const BarChart = () => {
	const { t } = useTranslation();
	const data = {
		labels: [
			'01/2016 ',
			'02/2016 ',
			'03/2016 ',
			'04/2016 ',
			'05/2016 ',
			'06/2016 ',
			'07/2016 ',
			'08/2016 ',
			'09/2016 ',
			'10/2016 ',
			'11/2016 ',
			'12/2016 ',
		],

		datasets: [
			{
				label: `${t('barChart_code')}  243544`,

				data: tableData[243345]
					.slice(1)
					.map((value) => value['ΑΞΙΑ ΑΕΡΙΟΥ (€)']),
				backgroundColor: ['rgba(255, 99, 132, 0.2)'],
				borderColor: ['rgba(255, 99, 132, 1)'],
				borderWidth: 1,
			},
			{
				label: `${t('barChart_code')}  197596`,
				data: tableData[197596]
					.slice(1)
					.map((value) => value['ΑΞΙΑ ΑΕΡΙΟΥ (€)']),
				backgroundColor: ['rgba(54, 162, 235, 0.2)'],
				borderColor: ['rgba(54, 162, 235, 1)'],
				borderWidth: 1,
			},
			{
				label: `${t('barChart_code')}  292122`,
				data: tableData[292122]
					.slice(1)
					.map((value) => value['ΑΞΙΑ ΑΕΡΙΟΥ (€)']),
				backgroundColor: ['rgba(255, 206, 86, 0.2)'],
				borderColor: ['rgba(255, 206, 86, 1)'],
				borderWidth: 1,
			},
		],
	};

	const options = {
		responsive: true,
		scales: {
			y: {
				min: 0,
				max: 3000,
			},
		},
		plugins: {
			title: {
				display: true,
				text: t('barChart_title'),
			},
		},
	};

	return (
		<div className="barChart-container">
			<div className="barChart">
				<Chart type="bar" data={data} options={options} />
			</div>
		</div>
	);
};

export default BarChart;
