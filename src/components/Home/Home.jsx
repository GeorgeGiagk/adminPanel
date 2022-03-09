import './Home.css';
import MapComponent from '../Map/MapComponent';
import Charts from '../charts/Charts';
import Table from './../Table/Table';

const Home = () => {
	return (
		<div className="home">
			<Table />
			<MapComponent />
			<Charts />
		</div>
	);
};

export default Home;
