import './Sidebar.css';
import {
	Home,
	AutoGraph,
	MailOutline,
	DynamicFeed,
	ChatBubbleOutline,
	People,
} from '@mui/icons-material';
import { useTranslation } from 'react-i18next';

const Sidebar = () => {
	const { t } = useTranslation();
	return (
		<div className="sidebar">
			<div className="sidebarWrapper">
				<div className="sidebarMenu">
					<h4 className="sidebarTitle">{t('menu_title')}</h4>
					<ul className="sidebarList">
						<li className="sidebarListItem active">
							<Home className="icon" />
							{t('home')}
						</li>
						<li className="sidebarListItem">
							<AutoGraph className="icon" />
							{t('analytics')}
						</li>
						<li className="sidebarListItem">
							<People className="icon" />
							{t('customers')}
						</li>
					</ul>
				</div>
				<div className="sidebarMenu">
					<h3 className="sidebarTitle">{t('notifications_title')}</h3>
					<ul className="sidebarList">
						<li className="sidebarListItem">
							<MailOutline className="icon" />
							Mail
						</li>
						<li className="sidebarListItem">
							<DynamicFeed className="icon" />
							Feedback
						</li>
						<li className="sidebarListItem">
							<ChatBubbleOutline className="icon" />
							{t('messages')}
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Sidebar;
