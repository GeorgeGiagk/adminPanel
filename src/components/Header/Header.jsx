import './Header.css';
import { NotificationsNone, Language, Settings } from '@mui/icons-material/';
import { languages } from '../../i18n/i18n';
import i18next from 'i18next';

const Header = () => {
	return (
		<div className="topBar">
			<div className="topBarWrapper">
				<div className="topLeft">
					<span className="logo">George</span>
				</div>
				<div className="topRight">
					<div className="topBarIcon">
						<NotificationsNone />
					</div>
					<div className="topBarIcon">
						<div className="dropdown">
							<button
								className="btn dropdown-toggle"
								type="button"
								id="dropdownMenuButton1"
								data-bs-toggle="dropdown"
							>
								<Language />
							</button>
							<ul
								className="dropdown-menu"
								aria-labelledby="dropdownMenuButton1"
							>
								{languages.map(({ code, name, country_code }) => (
									<li key={country_code}>
										<button
											className="dropdown-item"
											onClick={() => i18next.changeLanguage(code)}
										>
											{name}
										</button>
									</li>
								))}
							</ul>
						</div>
					</div>
					<div className="topBarIcon">
						<Settings />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Header;
