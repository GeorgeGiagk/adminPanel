import React, { useState, useEffect } from 'react';
import { GoogleMap, Marker, InfoWindow } from 'react-google-maps';
import tableData from '../data/tableData.json';

const Map = () => {
	const [Item, setItem] = useState(null);

	useEffect(() => {
		const listener = (e) => {
			if (e.key === 'Escape') setItem(null);
		};
		window.addEventListener('keydown', listener);

		return () => {
			window.removeEventListener('keydown', listener);
		};
	}, []);

	return (
		<GoogleMap
			defaultZoom={12}
			defaultCenter={{ lat: 40.626774, lng: 22.951263 }}
		>
			{tableData['ΣΥΝΟΛΟ 2016'].map((data, index) => (
				<Marker
					key={index}
					position={{
						lat: parseFloat(data['ΣΥΝΤΕΤΑΓΜΕΝΕΣ Χ']),
						lng: parseFloat(data['ΣΥΝΤΕΤΑΓΜΕΝΕΣ Υ']),
					}}
					onClick={() => {
						setItem(data);
					}}
				/>
			))}

			{Item && (
				<InfoWindow
					position={{
						lat: parseFloat(Item['ΣΥΝΤΕΤΑΓΜΕΝΕΣ Χ']),
						lng: parseFloat(Item['ΣΥΝΤΕΤΑΓΜΕΝΕΣ Υ']),
					}}
					onCloseClick={() => {
						setItem(null);
					}}
				>
					<div>
						<p>ΚΩΔ ΠΕΛΑΤΗ {Item['ΚΩΔ. ΠΕΛΑΤΗ']}</p>

						<p>Αξια Αερίου : {Math.floor(Item['ΑΞΙΑ ΑΕΡΙΟΥ (€)'] / 10)}€</p>
					</div>
				</InfoWindow>
			)}
		</GoogleMap>
	);
};

export default Map;
