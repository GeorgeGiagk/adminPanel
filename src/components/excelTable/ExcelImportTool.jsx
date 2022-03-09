import React, { useRef, useState } from 'react';

import * as XLSX from 'xlsx';

const ExcelImportTool = ({ onFileUploaded }) => {
	const [file, setFile] = useState(null);

	const [fileName, setFileName] = useState(null);

	const [sheetNames, setSheetNames] = useState([]);

	const [sheetData, setSheetData] = useState({});

	const fileRef = useRef();

	const readDataFromExcel = (data) => {
		const wb = XLSX.read(data);

		setSheetNames(wb.SheetNames);

		let mySheetData = {};

		wb.SheetNames.forEach((item) => {
			const worksheet = wb.Sheets[item];
			const jsonData = XLSX.utils.sheet_to_json(worksheet, {
				blankrows: '',
				header: 1,
			});

			mySheetData[item] = jsonData;
		});

		setSheetData(mySheetData);

		console.log(mySheetData);

		return mySheetData;
	};

	const handleFile = async (e) => {
		const myFile = e.target.files[0];
		if (!myFile) return;

		const data = await myFile.arrayBuffer();
		const mySheetData = readDataFromExcel(data);

		setFile(myFile);
		setFileName(myFile.name);

		onFileUploaded(mySheetData);
	};

	const handleRemove = () => {
		setFile(null);
		setFileName(null);
		setSheetNames([]);
		setSheetData(null);
		onFileUploaded(null);
		fileRef.current.value = '';
	};

	return (
		<div>
			<div className="mb-2">
				{fileName && <label>FileName: {fileName}</label>}
				{!fileName && <label>Please Upload a File</label>}
			</div>
			<div>
				<input
					type="file"
					accept="xlsx, xls"
					multiple={false}
					onChange={(e) => handleFile(e)}
					ref={fileRef}
				/>
				{fileName && (
					<button
						className="now-ui-icons ui-1 simple-remove align-middle"
						onClick={handleRemove}
					>
						X
					</button>
				)}
			</div>
		</div>
	);
};

export default ExcelImportTool;
