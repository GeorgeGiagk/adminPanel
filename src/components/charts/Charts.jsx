import React from 'react';
import BarChart from './BarChart';
import DoughnutChart from './DoughnutChart';
import './Chart.css';

const Charts = () => {
	return (
		<div className="allCharts">
			<BarChart />
			<DoughnutChart />
		</div>
	);
};

export default Charts;
