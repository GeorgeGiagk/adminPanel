import React from 'react';
import { withGoogleMap, withScriptjs } from 'react-google-maps';

import { api } from './API_KEY/apiKey';
import Map from './Map';
import './Map.css';

const MapWrapped = withScriptjs(withGoogleMap(Map));

const MapComponent = () => {
	return (
		<div className="map">
			<MapWrapped
				googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${api}`}
				loadingElement={<div style={{ height: `100%` }} />}
				containerElement={<div style={{ height: `100%` }} />}
				mapElement={<div style={{ height: `100%` }} />}
			/>
		</div>
	);
};

export default MapComponent;
