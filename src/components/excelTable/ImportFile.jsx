import ExcelImportTool from './ExcelImportTool';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

function ImportFile() {
	const { t } = useTranslation();
	const [sheetData, setSheetData] = useState(null);
	const [sheet, setSheet] = useState(null);
	const [sheetNames, setSheetNames] = useState(null);

	const handleFileUploaded = (e) => {
		console.log('file Uploaded', e);
		if (e) {
			let sheetNames = Object.keys(e);
			setSheetNames(sheetNames);
			setSheet(sheetNames[7]);
		} else {
			setSheetNames(null);
		}
		setSheetData(e);
	};

	const handleSheetChange = (e) => {
		setSheet(e.target.value);
	};

	return (
		<div className="container">
			<ExcelImportTool onFileUploaded={(e) => handleFileUploaded(e)} />

			{sheetData && (
				<>
					<div>
						{sheetNames.map((s, index) => (
							<span key={index} style={{ marginRight: 20 }}>
								<input
									className="form-check-input"
									src="./Frontend Exercise.xlsx"
									type="radio"
									name="sheetName"
									checked={s === sheet}
									onChange={(e) => handleSheetChange(e)}
									value={s}
									key={s}
								/>
								<label>{s}</label>
							</span>
						))}
					</div>
					<div>
						<label>{sheet}</label>
						<div className="md-12">
							<table className="table">
								<thead className="text-primary">
									<tr>
										<th scope="col">A/A </th>
										<th scope="col">{t('customers_code')} </th>
										<th scope="col">{t('category')}</th>
										<th scope="col">{t('year')}</th>
										<th scope="col">{t('total_gas_consumption')}</th>
										<th scope="col">{t('gas_value')}</th>
										<th>{t('coordinates_x')}</th>
										<th>{t('coordinates_y')}</th>
									</tr>
								</thead>
								<tbody>
									{sheetData[sheet].slice(1).map((row, index) => (
										<tr key={index}>
											{row.map((c, index) => (
												<td key={index}>{c}</td>
											))}
										</tr>
									))}
								</tbody>
							</table>
						</div>
					</div>
				</>
			)}
		</div>
	);
}

export default ImportFile;
