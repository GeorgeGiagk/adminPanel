import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Sidebar from './components/Sidebar/Sidebar';
import Footer from './components/Footer/Footer';

function App() {
	return (
		<div>
			<Header />
			<div className="wrapper">
				<Sidebar />
				<Home />
			</div>
			<Footer />
		</div>
	);
}

export default App;
