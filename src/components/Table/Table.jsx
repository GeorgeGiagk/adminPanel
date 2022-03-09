import './Table.css';
import tableData from '../data/tableData.json';
import { useTranslation } from 'react-i18next';

const Table = () => {
	const { t } = useTranslation();
	return (
		<div className="container">
			<div className="table-container">
				<table className="table table-hover table-responsive table-sm ">
					<thead className="table-light">
						<tr>
							<th>{t('customers_code')} </th>
							<th>{t('category')}</th>
							<th>{t('year')}</th>
							<th>{t('total_gas_consumption')}</th>
							<th>{t('gas_value')}</th>
							<th>{t('coordinates_x')}</th>
							<th>{t('coordinates_y')}</th>
						</tr>
					</thead>
					<tbody>
						{tableData['ΣΥΝΟΛΟ 2016'].slice(1).map((data, index) => {
							return (
								<tr key={index}>
									<td>{data['ΚΩΔ. ΠΕΛΑΤΗ']}</td>
									<td>{data.ΚΑΤΗΓΟΡΙΑ}</td>
									<td>{data.ΕΤΟΣ}</td>
									<td>{data['ΣΥΝΟΛΟ ΚΑΤΑΝΑΛΩΣΗΣ ΑΕΡΙΟΥ (kWh)']}</td>
									<td>{data['ΑΞΙΑ ΑΕΡΙΟΥ (€)']} €</td>
									<td>{data['ΣΥΝΤΕΤΑΓΜΕΝΕΣ Χ']} </td>
									<td>{data['ΣΥΝΤΕΤΑΓΜΕΝΕΣ Υ']} </td>
								</tr>
							);
						})}
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default Table;
